import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="join-input"
            placeholder="Name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="join-input mt-20"
            placeholder="Room"
            type="text"
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <input className="button mt-20" type="submit" value="Sign In" />
        </Link>
      </div>
    </div>
  );
};

export default Join;
