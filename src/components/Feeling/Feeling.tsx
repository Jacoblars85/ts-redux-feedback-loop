import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {
  const [feelingInput, setFeelingInput] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const submitFeelings = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_FEELING",
      payload: feelingInput,
    });
    history.push("/understanding");
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>

      <p>Feeling?</p>

      <form onSubmit={submitFeelings}>
        <input
          onChange={(e) => setFeelingInput(e.target.value)}
          value={feelingInput}
          type="text"
          placeholder="1-5"
        />

        <button>Next</button>
      </form>
    </div>
  );
}

export default Feeling;
