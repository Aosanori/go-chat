#!/bin/sh

CLIENT_OUTDIR=../client/src/chatroom
SERVER_OUTPUT_DIR=../backend/api/chat

# mkdir -p ${CLIENT_OUTDIR} ${SERVER_OUTPUT_DIR}

# protocol/helloworld.proto
#  --js_out => helloworld_pb.js
#  --grpc-web_out => helloworld_pb.d.ts
#  --grpc-web_out => HelloworldServiceClientPb.ts
#  --go_out => helloworld.pb.go

protoc chat.proto \
    --js_out=import_style=commonjs:${CLIENT_OUTDIR} \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:${CLIENT_OUTDIR} \
    --go_out=${SERVER_OUTPUT_DIR} --go_opt=paths=source_relative \
    --go-grpc_out=${SERVER_OUTPUT_DIR} --go-grpc_opt=paths=source_relative 