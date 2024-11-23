import React from 'react';
import axios from 'axios';

function Review() {

  return (
    <div>
  <h1>Review Your Feedback</h1>

<div className='reviewSizing'>

<p>feelings: {feeling}</p>
<p>understanding: {understanding}</p>
<p>support: {support}</p>
<p>Comments: {comments}</p>
</div>
<div className='reviewButton'>
<button onClick={postFeedback} className='submitButton'>Submit</button>
</div>
    </div>
  );
}

export default Review;