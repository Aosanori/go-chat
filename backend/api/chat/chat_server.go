package chat

import (
	context "context"
	"encoding/json"
	"fmt"
	"log"

	timestamppb "google.golang.org/protobuf/types/known/timestamppb"

	db "backend/db"
)

// Dummy DB
var roomIdBelongedUser map[string][]string = map[string][]string{"0": {"0", "1"}, "1": {"1", "2"}, "2": {"0", "2"}}
var messages  map[string][]*ChatMessage = map[string][]*ChatMessage{"0": []*ChatMessage{}, "1": []*ChatMessage{}, "2": []*ChatMessage{}}
var timestamps map[string][]*timestamppb.Timestamp = map[string][]*timestamppb.Timestamp{"0": []*timestamppb.Timestamp{}, "1": []*timestamppb.Timestamp{}, "2": []*timestamppb.Timestamp{}}

type ChatServer struct {
	ChatServiceServer
}

func NewChatServer() *ChatServer {
	return &ChatServer{}
}

func (s *ChatServer) GetRooms(ctx context.Context, req *GetRoomsRequest) (*GetRoomsResponse, error) {
	userId := req.UserId
	roomIds := roomIdBelongedUser[userId]
	return &GetRoomsResponse{RoomIds: roomIds}, nil
}

func (s *ChatServer) CreateChatMessage(ctx context.Context, req *CreateChatMessageRequest) (*CreateChatMessageResponse, error) {
	mysql := db.SqlConnect()
  defer mysql.Close()

	client := db.NewRedisClient()
	message, _ := json.Marshal(req)
	roomId := req.Content.RoomId
	_ = client.Publish(ctx, roomId, message).Err()

	oldMessages := messages[roomId]
	newMessages := append(oldMessages, req.Content)
	messages[roomId] = newMessages

	oldTimestamps := timestamps[roomId]
	newTimestamps := append(oldTimestamps, timestamppb.Now())
	timestamps[roomId] = newTimestamps

	return &CreateChatMessageResponse{
		Result: fmt.Sprintf("Success ! %s chatroom has %d messages.", roomId,len(messages)),
	}, nil
}

// 一度目のアクセスで保持しているメッセージを流し、それ以降は、新しいメッセージを検知したときのみデータを送る
func (s *ChatServer) GetChatMessageStream(req *GetChatMessageRequest, stream ChatService_GetChatMessageStreamServer) error {
	roomId := req.RoomId
	for i := range messages[roomId] {
		if err := stream.Send(&GetChatMessageResponse{Content: messages[roomId][i], Timestamp: timestamps[roomId][i]}); err != nil {
				return err
		}
  }

	client := db.NewRedisClient()
	pubsub := client.Subscribe(stream.Context(), roomId)
	defer pubsub.Close()

	// Wait for confirmation that subscription is created before publishing anything
	_, err := pubsub.Receive(stream.Context())
	if err != nil {
		log.Fatal(err)
	}

	// Listen for messages in the room
	ch := pubsub.Channel()

	// Consume messages.
	for msg := range ch {
		var message GetChatMessageResponse
		if err := json.Unmarshal([]byte(msg.Payload), &message); err != nil {
			log.Fatal(err)
		}
		fmt.Println(msg.Channel, msg.Payload)
		if err := stream.Send(&message); err != nil {
			return err
		}
	}
	return nil
}
