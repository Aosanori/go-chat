import type React from "react";
import { MessageForm, useMessageForm } from "./messageForm";
import { MessageList, useMessages } from "./messageList";
import type { GRPCClients } from "../gRPCClients";


type Props = {
  clients: GRPCClients;
};

export const ChatRoom: React.FC<Props> = ({ clients }) => {
  const messengerClient = clients.chatServiceClient;
  const messagesState = useMessages(messengerClient, '0');
  const messageFormState = useMessageForm(messengerClient);
  return (
    <div>
      <MessageForm {...messageFormState} />
      <MessageList {...messagesState} />
    </div>
  );
};