import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  return (
    <ChatContext.Provider value={{ messages, setMessages, input, setInput }}>
      {children}
    </ChatContext.Provider>
  );
};