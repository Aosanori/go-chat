import type * as React from 'react';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import type { ChatMessage } from '../chatroom/chat_pb';

type Props = {
  message: ChatMessage;
};

export const  MessageTile: React.FC<Props> = ({ message }) => {
  return (
    <List sx={{ backgroundColor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={message.getUserid()}
            src="https://hellogiggles.com/wp-content/uploads/2015/03/11/micro-pig-LondonPignic.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary={message.getUserid()} secondary={message.getText()} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
