import { combineReducers } from 'redux';
import formReducer from './formReducer/signUp.reducer'

export default combineReducers({
    theform: formReducer
});