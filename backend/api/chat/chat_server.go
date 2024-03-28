package chat

import (
	context "context"
	"fmt"

	emptypb "google.golang.org/protobuf/types/known/emptypb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	// chatpb "backend/api/chat"
)

var messages []*Message = []*Message{}
var timestamps []*timestamppb.Timestamp = []*timestamppb.Timestamp{}

type ChatServer struct {
	ChatServiceServer
}

func NewChatServer() *ChatServer {
	return &ChatServer{}
}

func (s *ChatServer) CreateMessage (ctx context.Context, req *CreateMessageRequest) (*CreateMessageResponse, error) {
	messages = append(messages, req.Content)
	timestamps = append(timestamps, timestamppb.Now())
	return &CreateMessageResponse{
		// Result: fmt.Sprintf("%s\n", messages),
		Result: fmt.Sprintf("Success ! This chatroom has %d messages.", len(messages)),
	}, nil
}

func (s *ChatServer) GetMessageStream (_ *emptypb.Empty, stream ChatService_GetMessageStreamServer) error {
	for {
		// レスポンスの生成
		if err := stream.Send(&MessagesResponse{Contents: messages, Timestamps: timestamps}); err != nil {
			return err
		}
	}
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
