import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);

  const dispatch = useDispatch();

  const history = useHistory();

  const postFeedback = () => {
    axios({
      method: "POST",
      url: "/api/feedback",
      data: {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comments,
      },
    })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });

    dispatch({
      type: "CLEAR_REDUCERS",
    });
    history.push("/thankyou");
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>

      <div className="reviewSizing">
        <p>feelings: {feeling}</p>
        <p>understanding: {understanding}</p>
        <p>support: {support}</p>
        <p>Comments: {comments}</p>
      </div>
      <div className="reviewButton">
        <button onClick={postFeedback} className="submitButton">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Review;
