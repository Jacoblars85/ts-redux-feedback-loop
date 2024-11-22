import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const feeling = (state = "", action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    }
    if (action.type === 'CLEAR_REDUCERS') {
        return ""
    }
    return state;
}


const store = createStore(
    combineReducers({
        feeling,
    }),
    applyMiddleware(logger),
);

export default store;