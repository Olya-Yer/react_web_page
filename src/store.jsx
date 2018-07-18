import { createStore, combineReducers } from 'redux'
import nameReducer from './reducers/nameReducer'
import ageReducer from './reducers/ageReducer'


const store = createStore(
    combineReducers({
        nameReducer,
        ageReducer
    }),
    {}
);

export default store;