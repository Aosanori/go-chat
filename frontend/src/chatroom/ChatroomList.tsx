import type React from "react";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import type { ChatMessage } from "./chat_pb";
import type { JSX } from "react/jsx-runtime";

type Props = {
  chatRooms: Map<string, ChatMessage[]>
};

export const ChatroomList: React.FC<Props> = ( props ) => {
  const components: JSX.Element[] = [];
  props.chatRooms.forEach((messages, roomId) => {
    if(messages.length > 0){
					components.push(
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={roomId}>
							<List sx={{ backgroundColor: "background.paper" }}>
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar
											alt={roomId}
											src="https://hellogiggles.com/wp-content/uploads/2015/03/11/micro-pig-LondonPignic.jpg"
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
  return (
    <div>
      {/* {chatRooms.map(m => (
        <div key={m}>
          <List sx={{ backgroundColor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={m}
                  src="https://hellogiggles.com/wp-content/uploads/2015/03/11/micro-pig-LondonPignic.jpg"
                />
              </ListItemAvatar>
              <ListItemText primary={m} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </div>
        )
      )
    } */}
    {components.map(c => c)}
    </div>
  );
};

