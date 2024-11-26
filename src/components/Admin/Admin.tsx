import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import AdminDelete from '../AdminDelete/AdminDelete';

function Admin() {
    const dispatch = useDispatch()

    const feedback = useSelector((store) => store.feedback)

    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/api/feedback'
        })
            .then((response) => {
                dispatch({
                    type: 'SET_FEEDBACK',
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log('error on GET', error);
            });
    }

  return (
    <div>
       <div className='boxAdmin'>
            <h1>Feedback Results!</h1>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {feedback.map((feed: any) => {
                        return (
                            <AdminDelete key={feed.id} feed={feed} getFeedback={getFeedback} />
                        )
                    })}
                </tbody>
                <tfoot>
                <tr className='footerTable'></tr>
                </tfoot>
            </table>
    </div>
  );
}

export default Admin;