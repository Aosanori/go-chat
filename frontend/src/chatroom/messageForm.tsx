
import { useState, useCallback, type SyntheticEvent } from "react";

import type { ChatServiceClient } from "./ChatServiceClientPb";
import { CreateMessageRequest, Message } from "./chat_pb"; // .dから読み込むとアウト
import { Grid, TextField, Button } from "@mui/material";

export const useMessageForm = (client: ChatServiceClient) => {
  const [message, setMessage] = useState<string>("");

  // メッセージ入力欄
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
      const onChange = useCallback(
    (event: SyntheticEvent) => {
      const target = event.target as HTMLInputElement;
      setMessage(target.value);
    },
    [setMessage]
  );

  // メッセージ投稿
  const onSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      const req = new CreateMessageRequest();
      const newMessage = new Message();
      newMessage.setRoomid("0");
      newMessage.setUserid("0");
      newMessage.setText(message);
      req.setContent(newMessage);
      client.createMessage(req, null, res => console.log(res));
      setMessage("");
    },
    [client, message]
  );

  return {
    message,
    onChange,
    onSubmit
  };
};

type Props = ReturnType<typeof useMessageForm>;

export const MessageForm: React.FC<Props> = ({
  message,
  onChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={9}>
          <TextField
            type="text"
            label="Message"
            variant="outlined"
            fullWidth
            value={message}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={3}>
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

// export const MessageForm: React.FC<Props> = ({
//   message,
//   onChange,
//   onSubmit
// }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" value={message} onChange={onChange} />
//     </form>
//   );
// };