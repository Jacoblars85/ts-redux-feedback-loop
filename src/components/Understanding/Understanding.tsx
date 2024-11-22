import React from "react";
import axios from "axios";

function Understanding() {
  return (
    <div>
      <h1>How well are you understanding the content?</h1>

      <p>Understanding?</p>

      <form onSubmit={submitUnderstanding}>
        <input
          onChange={(e) => setUnderstandingInput(e.target.value)}
          value={understandingInput}
          type="text"
          placeholder="1-5"
        />

        <button>Next</button>
      </form>
    </div>
  );
}

export default Understanding;
