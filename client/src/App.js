import "./App.css";
import io from "socket.io-client";
import { useEffect } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const sendMessage = () => {
    socket.emit("send_message", {
      message: "Hello from client",
    });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      alert(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input placeholder="Type here...." type="text" />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

export default App;
