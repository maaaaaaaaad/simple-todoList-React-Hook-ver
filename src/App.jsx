import React, { useState } from "react";
import ListView from "./components/ListView";
import Form from "./components/Form";

const App = () => {
  const [message, setMessage] = useState([
    // { id: 0, userText: "Content", count: 0 },
    // { id: 1, userText: "Text", count: 1 },
  ]);

  const addition = (data) => {
    const arr = [
      ...message,
      { id: Date.now(), userText: data, count: message.length },
    ];
    setMessage(arr);
  };

  const remove = (data) => {
    const result = message.filter((item) => data.id !== item.id);
    setMessage(result);
  };

  const resetMessage = () => {
    const arr = [...message];
    arr.length = 0;
    setMessage(arr);
  };

  return (
    <>
      <Form onAdd={addition} resetMesAll={resetMessage}></Form>
      <ul>
        {message.map((item) => (
          <ListView
            key={item.id}
            messageObj={item}
            messageText={item.userText}
            messageCount={item.count}
            delete={remove}
          ></ListView>
        ))}
      </ul>
    </>
  );
};

export default App;
