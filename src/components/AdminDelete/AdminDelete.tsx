import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function AdminDelete({ feed, getFeedback }) {

    const deleteFeedback = () => {
        console.log('in delete route');

        axios({
            url: `/feedback/${feed.id}`,
            method: 'DELETE'
        }).then((response) => {
            getFeedback()
        }).catch((error) => {
            console.log(error, 'Error in deleting feedback');
        })
    }

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