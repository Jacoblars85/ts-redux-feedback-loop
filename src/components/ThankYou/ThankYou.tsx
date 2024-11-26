import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div>
      <div className="thankBody">
        <h1>Thank You!</h1>

        <Link to="/">
          <button className="thankButton">Leave New Feedback</button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
