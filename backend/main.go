// gRPCサーバーをlocalhost:8080で動かすためのコード
package main

import (
	// (一部抜粋)
	"context"
	"errors"
	"fmt"
	"io"
	"log"
	"net"
	"os"
	"os/signal"
	"time"

	pb "backend/api/chat" // go mod init backend  一番上のパスの名前にすると吉？

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type ChatServer struct {
	pb.ChatServiceServer
}

func NewChatServer() ChatServer {
	return ChatServer{}
}

func main() {
	// 1. 8080番portのLisnterを作成
	var port int = 8080
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		panic(err) // プログラムの継続的な実行が難しく、どうしよもなくなった時にプログラムを強制的に終了させるために発生するエラー
	}

	// 2. gRPCサーバーを作成
	s := grpc.NewServer() // &は変数toポインタ, *はポインタto変数

	// 3. gRPCサーバーにGreetingServiceを登録
	// protoファイルで定義したサービスGreetingServiceをgRPCサーバー上で動かすためには、
	// 「gRPCサーバーにサービスを登録する」作業が必要
	
	// hellopb.RegisterGreetingServiceServer(s, [サーバーに登録するサービス])
	// 第二引数にはhellopb.GreetingServiceServer型 => Helloメソッド(とmustEmbedUnimplementedGreetingServiceServerメソッド)を持つ構造体ならば代入することができる
	pb.RegisterChatServiceServer(s, NewChatServer())

	// 4. サーバーリフレクションの設定 (gRPCサーバーそのものから、protoファイルの情報を取得する)
	reflection.Register(s)

	// 4. 作成したgRPCサーバーを、8080番ポートで別スレッド稼働させる
	go func() {
		log.Printf("start gRPC server port: %v", port)
		s.Serve(listener) // 稼働
	} ()
	// goroutine: 非常に軽量な別スレッド

	// 5.Ctrl+Cが入力されたらGraceful shutdownされるようにする
	quit := make(chan os.Signal, 1) // 停止用のchannelを作る
	signal.Notify(quit, os.Interrupt) // 指定されたシグナル通知を受信するために、 与えられたチャネルを登録、バッファリングされることに注意
	<-quit // シグナルが受信されるまで待つ
	log.Println("stopping gRPC server...")
	s.GracefulStop() // サーバー停止
}