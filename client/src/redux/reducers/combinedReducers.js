import { combineReducers } from 'redux';
import Loader from './Loader';
import Numbers from './numReducer';
export default combineReducers({
  Numbers,
  Loader,
});
