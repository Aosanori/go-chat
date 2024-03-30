import type * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import type { GRPCClients } from '../gRPCClients';
import { MessageForm, useMessageForm } from './messageForm';
import { useMessages, ChatroomList } from './ChatroomList';

const drawerWidth = 240;

type Props = {
  clients: GRPCClients;
};

export const ChatsWrapper: React.FC<Props> = ({ clients }) => {
	const messengerClient = clients.chatServiceClient;
  const messagesState = useMessages(messengerClient, '0');
  const messageFormState = useMessageForm(messengerClient);

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
				<ChatroomList {...messagesState} />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
				 
        <MessageForm {...messageFormState} />
      </Box>
    </Box>
  );
}

