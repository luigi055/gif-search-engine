import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gifsReducer from './gifsReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  gifs: gifsReducer,
  modal: modalReducer,
});

export default reducers;
