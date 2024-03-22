package chat

import (
	"errors"
	"io"

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

// 一度目のアクセスで保持しているメッセージを流し、それ以降は、新しいメッセージを検知したときのみデータを送る
func (s *ChatServer) ChatBiStreams(stream ChatService_ChatBiStreamsServer) error {
	for {
		req, err := stream.Recv()

		// 終了判定
		if errors.Is(err, io.EOF) {
			return nil
		}

		if err != nil {
			return err
		}

		messages = append(messages, req.Content)
		timestamps = append(timestamps, timestamppb.Now())

		// レスポンスの生成
		if err := stream.Send(&ChatMessageForSending{Contents: messages, Timestamps: timestamps}); err != nil {
			return err
		}
	}
}
