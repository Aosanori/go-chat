import { ChatServiceClient } from "./chatroom/ChatServiceClientPb";


export type GRPCClients = {
  chatServiceClient: ChatServiceClient;
};

export const gRPCClients = {
  chatServiceClient: new ChatServiceClient("http://0.0.0.0:8080")
};