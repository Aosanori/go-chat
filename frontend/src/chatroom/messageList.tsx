import type React from "react";
import { useEffect, useState } from "react";
import type { ChatServiceClient } from "./ChatServiceClientPb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import type { Message } from "./chat_pb";
import { MessageTile } from "../components/messageTile";

type Props = {
  messages: Message[];
};

export const MessageList: React.FC<Props> = ({ messages }) => {
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

export const useMessages = (client: ChatServiceClient) => {
  const [messages, setMessages] = useState<Message[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const stream$ = client.getMessageStream(new Empty())
    stream$.on("data", m => {
      const content = m.getContent()
      console.log(content);
      if (content !== undefined) {
				setMessages((state) => [...state, content]);
			}
    });
  }, [client]);
  return {
    messages
  };
};