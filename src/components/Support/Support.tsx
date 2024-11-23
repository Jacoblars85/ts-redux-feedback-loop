import React from 'react';
import axios from 'axios';

function Support() {

  return (
    <div>

<h1>How well are you being supported?</h1>

<p>Support?</p>

<form onSubmit={submitSupport}>

    <input
        onChange={(e) => setSupportInput(e.target.value)}
        value={supportInput}
        type='text'
        placeholder='1-5' />

    <button>Next</button>

</form>
    </div>
  );
}

export default Support;