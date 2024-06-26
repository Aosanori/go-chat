import type * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type { GRPCClients } from '../gRPCClients';
import { MessageForm, useMessageForm } from './messageForm';
import { useEffect, useState } from "react";
import type { ChatServiceClient } from "./ChatServiceClientPb";
import { GetChatMessageRequest, GetRoomsRequest, type ChatMessage } from "./chat_pb";
// import { ChatroomList } from './ChatroomList';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';


const drawerWidth = 240;

type Props = {
  clients: GRPCClients;
};

export const useChatRooms = (client: ChatServiceClient, userId: string) => {
  const [chatRooms, setChatRooms] = useState<string[]>([]);

  useEffect(() => {
    const getRoomsRequest = new GetRoomsRequest();
    getRoomsRequest.setUserid(userId);
    (async () => {
      const roomIds = (
        await client.getRooms(getRoomsRequest)
      ).getRoomidsList();
      setChatRooms((_) => roomIds)
    })();
  }, [client, userId]);

  return {chatRooms};
}

export const useMessages = (client: ChatServiceClient, roomIds: string[]) => {
  const [messages, setMessages] = useState<Map<string, ChatMessage[]>>(new Map());

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    for (const roomId in roomIds){
      const messageRequest = new GetChatMessageRequest()
      messageRequest.setRoomid(roomId)
      const stream$ = client.getChatMessageStream(messageRequest)
      stream$.on("data", m => {
        const content = m.getContent()
        if (content !== undefined) {
          setMessages((state) => {
            const newState = new Map(state)
            newState.set(roomId, [...(state.get(roomId) ?? []), content])
						return newState;
					});
        }
      });
    }
  }, [client, roomIds]);
  return {
    messages
  };
};

export const ChatsWrapper: React.FC<Props> = ({ clients }) => {
  const messengerClient = clients.chatServiceClient;
  const chatRoomsState = useChatRooms(messengerClient, '0')
  const messagesState = useMessages(messengerClient, chatRoomsState.chatRooms);
  
  const [chatRoom, setChatRoom] = useState<string>(chatRoomsState.chatRooms[0])
  const chatRoomListItemComponents: JSX.Element[] = [];
  messagesState.messages.forEach((messages, roomId) => {
    if(messages.length > 0){
					chatRoomListItemComponents.push(
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={roomId}>
							<List sx={{ backgroundColor: "background.paper" }}>
								<ListItem alignItems="flex-start" onClick={() => {setChatRoom(roomId)}}>
									<ListItemAvatar>
										<Avatar
											alt={roomId}
											// src="https://hellogiggles.com/wp-content/uploads/2015/03/11/micro-pig-LondonPignic.jpg"
										/>
									</ListItemAvatar>
									<ListItemText
										primary={roomId}
										secondary={messages[messages.length - 1].getText()}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
							</List>
						</div>,
					);
				}
  })
  const messageFormState = useMessageForm(messengerClient, chatRoom);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        {chatRoomListItemComponents.map(c => c)}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, 
          bgcolor: 'background.default', 
          p: 3,
          // display: 'flex' 
        }}>
        <Toolbar />
        <ChatMessageBubble messages={messagesState.messages.get(chatRoom) ?? []} />
        <div ref={bottomRef} />
      {chatRoom !== undefined ? <MessageForm {...messageFormState} /> : <></>}
      </Box>
    </Box>
  );
}

type MessageType = {
  messages: ChatMessage[]
};

const ChatMessageBubble: React.FC<MessageType> = ( props ) => {
  return (
    <div style={{ maxHeight: '80%', overflowY: 'auto' }}>
      {props.messages.map((message) => {
        return (
          <Box
            key={message.getText()}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: message.getUserid() === '0' ? 'flex-end' : '',
              marginBottom: 2,
            }}
          >
            {message.getUserid() === 'other' && (
              <Avatar
                alt="User Avatar"
                src="https://via.placeholder.com/48"
                sx={{ marginRight: 2 }}
              />
            )}
            <Box
              sx={{
                borderRadius: '4px',
                padding: 2,
                backgroundColor: message.getUserid() === '0' ? '#E3F2FD' : '#E0E0E0',
              }}
            >
              <p style={{ fontSize: '14px' }}>{message.getText()}</p>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};