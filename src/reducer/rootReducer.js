import { combineReducers } from 'redux';
import { pagination } from './pagination';
import { students } from './students';
import { userInteract } from './userInteract';
import { auth } from './auth';
export default combineReducers({auth, pagination, students, userInteract});