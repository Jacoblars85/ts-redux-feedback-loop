import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
  const [understandingInput, setUnderstandingInput] = useState(0);

  const dispatch = useDispatch();

  const history = useHistory();

  const submitUnderstanding = (e: any) => {
    e.preventDefault();

    dispatch({
      type: "SET_UNDERSTANDING",
      payload: understandingInput,
    });

    history.push("/support");
  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>

      <p>Understanding?</p>

      <form onSubmit={submitUnderstanding}>
        <input
          onChange={(e) => setUnderstandingInput(e.target.value)}
          value={understandingInput}
          type="number"
          placeholder="1-5"
        />

        <button>Next</button>
      </form>
    </div>
  );
}

export default Understanding;
