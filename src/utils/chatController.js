export default function ChatController(
  socket,
  user_id,
  recipient_id,
  setWSConnection,
  setWSError,
  setChatMessages,
  chatWindow
) {
  socket.current = new WebSocket("ws://localhost:5001");

  socket.current.onopen = () => {
    setWSConnection(true);
    const mess = {
      event: "connection",
      from: user_id,
      to: recipient_id,
    };
    socket.current.send(JSON.stringify(mess));
  };

  socket.current.onmessage = (event) => {
    const mess = JSON.parse(event.data);
    if (mess.messages) {
      setChatMessages(mess.messages);
      if (chatWindow.current) {
        chatWindow.current.scrollTo(0, chatWindow.current.scrollHeight);
      }
    }
  };

  socket.current.onclose = () => {
    setWSConnection(false);
  };

  socket.current.onerror = () => {
    setWSError("Произошла ошибка");
  };

  return <></>;
}
