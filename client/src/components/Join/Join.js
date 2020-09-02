import React, { useState } from "react";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="container">
      <div className="innerContainer">
        <h1>Join page</h1>
        <TextField
          className="joinInput"
          id="standard-basic"
          label="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className="joinInput"
          id="standard-basic"
          label="Room"
          onChange={(event) => setRoom(event.target.value)}
        />
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <div className="button">
            <Button variant="contained" color="primary">
              JOIN
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Join;
