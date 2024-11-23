import React from 'react';
import axios from 'axios';


function Comments() {

  return (
    <div>
       <h1>Any comments you want to leave?</h1>

<p>Comments</p>

<form onSubmit={submitComments}>

    <input
        data-testid="input"
        onChange={(e) => setCommentsInput(e.target.value)}
        value={commentsInput}
        type='text'
        placeholder='text' />

    <button data-testid="next" >Next</button>

</form>
    </div>
  );
}

export default Comments;