#!/bin/sh

set -xe

CHAT_SERVER_OUTPUT_DIR=backend/api/chat
CLIENT_OUTPUT_DIR=client/src/grpc

protoc --version
protoc --proto_path=proto chat.proto \
  --go_out=plugins="grpc:${CHAT_SERVER_OUTPUT_DIR}" \
  --js_out=import_style=commonjs:${CLIENT_OUTPUT_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${CLIENT_OUTPUT_DIR}