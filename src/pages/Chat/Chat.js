/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import ChatController from "../../utils/chatController";
import { Box, Paper, Typography, Button, TextField } from "@mui/material";
import Message from "../../components/Message/Message";
import styles from "../../style/styles";
import "./style.scss";

const Chat = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const { getUsernameData, setWSConnection, setWSError, setChatMessages } =
    useActions();

  const user_id = useSelector((state) => state.auth.user.id);
  const { recipient_username, connection, messages, ws_error } = useSelector(
    (state) => state.chat
  );

  const recipient_id = id.slice(1, id.length);
  const socket = useRef();
  const chatWindow = useRef();

  function sendMessage(e) {
    e.preventDefault();
    if (message.length > 0) {
      socket.current.send(
        JSON.stringify({
          event: "message",
          message,
          from: user_id,
          to: recipient_id,
        })
      );
      setMessage("");
    }
    // scroll();
  }

  useEffect(() => {
    getUsernameData(recipient_id);
    ChatController(
      socket,
      user_id,
      recipient_id,
      setWSConnection,
      setWSError,
      setChatMessages,
      chatWindow
    );
  }, []);

  return (
    <>
      <Box sx={styles.fullHeight}>
        <Paper elevation={4} sx={{ backgroundColor: "#caebf5" }}>
          <Box p={5}>
            <Typography
              m={2}
              variant="h4"
              sx={{ textAlign: "center" }}
            >{`Чат c пользовалелем ${recipient_username}`}</Typography>
            <Box sx={styles.center}>
              <Typography m={1}>
                {connection ? `соединение установлено` : `нет соединения`}
              </Typography>
              {ws_error && <Typography>`${ws_error}`</Typography>}
            </Box>

            <Paper elevation={4}>
              <Box
                ref={chatWindow}
                sx={{ height: "50vh", width: "100%", overflow: "scroll" }}
              >
                {messages.length > 0 &&
                  messages.map((mes, index) => (
                    <Message key={index} mes={mes} user_id={user_id} />
                  ))}
              </Box>
            </Paper>
            <form onSubmit={sendMessage}>
              <Box my={2} sx={{ width: "100%", ...styles.around }}>
                <Paper
                  elevation={4}
                  sx={{ backgroundColor: "white", width: "100%" }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                  />
                </Paper>
                <Box>
                  <Button mx={2} type="submit">
                    Отправить
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Chat;
