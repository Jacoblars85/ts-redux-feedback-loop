import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {
  const [supportInput, setSupportInput] = useState(0);

  const dispatch = useDispatch();

  const history = useHistory();

  const submitSupport = (e: any) => {
    e.preventDefault();

    dispatch({
      type: "SET_SUPPORT",
      payload: supportInput,
    });

    history.push("/comments");
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>

      <p>Support?</p>

      <form onSubmit={submitSupport}>
        <input
          onChange={(e) => setSupportInput(e.target.value)}
          value={supportInput}
          type="number"
          placeholder="1-5"
        />

        <button>Next</button>
      </form>
    </div>
  );
}

export default Support;
