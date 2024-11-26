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

    </div>
  );
}

export default Admin;