import { combineReducers } from 'redux';
import gifsReducer from './gifsReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  gifs: gifsReducer,
  modal: modalReducer,
});

export default reducers;
