import React from 'react';
import axios from 'axios';

function AdminDelete({ feed, getFeedback }) {

  return (
    <div>
<tr>
            <td>{feed.feeling}</td>
            <td>{feed.understanding}</td>
            <td>{feed.support}</td>
            <td>"{feed.comments}"</td>
            <td>
                <button onClick={deleteFeedback}>delete</button>
            </td>
        </tr>
    </div>
  );
}

export default AdminDelete;