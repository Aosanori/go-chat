import type React from "react";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';

type Props = {
  chatRooms: string[]
};

export const ChatroomList: React.FC<Props> = ({ chatRooms }) => {
  return (
    <div>
      {chatRooms.map(m => (
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
      ))}
    </div>
  );
};

