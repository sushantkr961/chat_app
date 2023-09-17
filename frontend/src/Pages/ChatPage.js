import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState();
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <React.Fragment>
      {chats?.map((el) => (
        <div key={el._id}>{el.chatName}</div>
      ))}
    </React.Fragment>
  );
};

export default ChatPage;
