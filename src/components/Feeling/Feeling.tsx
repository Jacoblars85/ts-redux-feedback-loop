import React from 'react';
import axios from 'axios';

function Feeling() {

  return (
    <div>
  <h1>How are you feeling today?</h1>


<p>Feeling?</p>

<form onSubmit={submitFeelings}>

    <input
        onChange={(e) => setFeelingInput(e.target.value)}
        value={feelingInput}
        type='text'
        placeholder='1-5' />


    <button>Next</button>


</form>
    </div>
  );
}

export default Feeling;