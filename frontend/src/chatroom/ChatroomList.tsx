import type React from "react";
import { useEffect, useState } from "react";
import type { ChatServiceClient } from "./ChatServiceClientPb";
import { GetChatMessageRequest, type ChatMessage } from "./chat_pb";
import { MessageTile } from "../components/messageTile";

type Props = {
  messages: ChatMessage[]
};

export const ChatroomList: React.FC<Props> = ({ messages }) => {
  return (
    <div>
      {messages.map(m => (
        <div key={m.getText()}>
          <MessageTile message={m}/>
        </div>
      ))}
    </div>
  );
};

export const useMessages = (client: ChatServiceClient, roomId: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const messageRequest = new GetChatMessageRequest()
    messageRequest.setRoomid(roomId)
    const stream$ = client.getChatMessageStream(messageRequest)
    stream$.on("data", m => {
      const content = m.getContent()
      console.log(content);
      if (content !== undefined) {
				setMessages((state) => [...state, content]);
			}
    });
  }, [client, roomId]);
  return {
    messages
  };
};