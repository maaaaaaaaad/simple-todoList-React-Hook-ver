import React from "react";

const Form = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const sub = (event) => {
    event.preventDefault();
    const textValue = inputRef.current.value;
    textValue && props.onAdd(textValue);
    formRef.current.reset();
  };

  const reset = () => {
    props.resetMesAll();
  };

  return (
    <form ref={formRef} onSubmit={sub}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Please you enter message"
      />
      <input type="submit" value="ADD" />
      <button onClick={reset}>RESET ALL</button>
    </form>
  );
};

export default Form;
