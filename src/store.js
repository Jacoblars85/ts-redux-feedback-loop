import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';



const store = createStore(
    combineReducers({

    }),
    applyMiddleware(logger),
);

export default store;