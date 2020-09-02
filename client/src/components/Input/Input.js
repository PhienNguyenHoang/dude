import React from "react";

import Button from "@material-ui/core/Button";

import Icon from "@material-ui/core/Icon";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="type a message"
        className="input"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      ></input>
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={event => sendMessage(event)}
      />
    </div>
  );
};

export default Input;
