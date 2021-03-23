import React from "react";

const ListView = (props) => {
  const del = () => {
    props.delete(props.messageObj);
  };

  return (
    <li>
      <span>{props.messageText}</span>
      <button onClick={del}>remove</button>
    </li>
  );
};

export default ListView;
