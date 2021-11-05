/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import ChatController from "../../utils/chatController";
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

  function sendMessage() {
    socket.current.send(
      JSON.stringify({
        event: "message",
        message,
        from: user_id,
        to: recipient_id,
      })
    );
  }

  useEffect(() => {
    getUsernameData(recipient_id);
    ChatController(
      socket,
      user_id,
      recipient_id,
      setWSConnection,
      setWSError,
      setChatMessages
    );
  }, []);

  return (
    <>
      <h1>{`Чат c пользовалелем ${recipient_username}`}</h1>
      <span>{connection ? `соединение установлено` : `нет соединения`}</span>

      {ws_error && <span>`${ws_error}`</span>}
      <div className="chat_window">
        {messages.length > 0 &&
          messages.map((mes, index) => (
            <div key={index} className="message">
              <span>{mes.id === user_id ? "Вы" : "Собеседник"}</span>
              <span>{" - "}</span>
              <span>{mes.message}</span>
            </div>
          ))}
      </div>
      <div className="chat_form">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </>
  );
};

export default Chat;
