package chat

import (
	context "context"
	"encoding/json"
	"fmt"
	"log"

	emptypb "google.golang.org/protobuf/types/known/emptypb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"

	// chatpb "backend/api/chat"
	db "backend/db"
)

const RoomId = "0"
var messages []*Message = []*Message{}
var timestamps []*timestamppb.Timestamp = []*timestamppb.Timestamp{}

type ChatServer struct {
	ChatServiceServer
}

func NewChatServer() *ChatServer {
	return &ChatServer{}
}

func (s *ChatServer) CreateMessage (ctx context.Context, req *CreateMessageRequest) (*CreateMessageResponse, error) {
	client := db.NewRedisClient()
	message, _ := json.Marshal(req)
	_ = client.Publish(ctx, req.Content.RoomId, message).Err()

	messages = append(messages, req.Content)
	timestamps = append(timestamps, timestamppb.Now())
	return &CreateMessageResponse{
		Result: fmt.Sprintf("Success ! This chatroom has %d messages.", len(messages)),
	}, nil
}

// 一度目のアクセスで保持しているメッセージを流し、それ以降は、新しいメッセージを検知したときのみデータを送る
func (s *ChatServer) GetMessageStream (_ *emptypb.Empty, stream ChatService_GetMessageStreamServer) error {
	client := db.NewRedisClient()
	pubsub := client.Subscribe(stream.Context(), RoomId)
	defer pubsub.Close()
	_, err := pubsub.Receive(stream.Context())
	if err != nil {
			log.Fatal(err)
	}

	ch := pubsub.Channel()
	// Consume messages.
	for msg := range ch {
			message := MessagesResponse{Contents: messages, Timestamps: timestamps};
			err := json.Unmarshal([]byte(msg.Payload), &message)
			if err != nil {
					log.Fatal(err)
			}
			fmt.Println(msg.Channel, msg.Payload)
			if err := stream.Send(&message); err != nil {
					return err
			}
	}
	return nil
}

// // 一度目のアクセスで保持しているメッセージを流し、それ以降は、新しいメッセージを検知したときのみデータを送る
// func (s *ChatServer) ChatBiStreams(stream ChatService_ChatBiStreamsServer) error {
// 	for {
// 		req, err := stream.Recv()

// 		// 終了判定
// 		if errors.Is(err, io.EOF) {
// 			return nil
// 		}

// 		if err != nil {
// 			return err
// 		}

// 		messages = append(messages, req.Content)
// 		timestamps = append(timestamps, timestamppb.Now())

// 		// レスポンスの生成
// 		if err := stream.Send(&ChatMessageForSending{Contents: messages, Timestamps: timestamps}); err != nil {
// 			return err
// 		}
// 	}
// }
