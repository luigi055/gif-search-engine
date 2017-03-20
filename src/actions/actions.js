import axios from 'axios';
import { browserHistory } from 'react-router';
import Firebase from '../firebase/config';

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

const API_KEY = 'api_key=dc6zaTOxFJmzC';
const API_URL = `http://api.giphy.com/v1/gifs/search?q=`;

// Used with redux-promise
// export function requestGifs(term = null) {
//   const request = axios.get(`${API_URL}${encodeURIComponent(term)}&${API_KEY}`);
//   return {
//     type: REQUEST_GIFS,
//     payload: request,
//   };
// }

// now with redux-thunk
export function requestGifs(term = null) {
  return function dispathGifs(dispatch) {
    axios.get(`${API_URL}${encodeURIComponent(term)}&${API_KEY}`).then(response => {
      dispatch({
        type: REQUEST_GIFS,
        payload: response,
      });
    });
  }
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    payload: gif,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}


export function signOutUser() {
  browserHistory.push('/');
  return {
    type: SIGN_OUT_USER,
  };
}

export function authUser() {
  return {
    type: AUTH_USER,
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signUpUser(credentials) {
  return function createAccount(dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/favorites');
      })
      .catch(error => {
        console.log(error);
        dispatch(authError(error));
      });
  }
}

export function signInUser(credentials) {
  return function Login(dispatch) {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/favorites');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}

// Let's add another action to check the authentication state with the data Firebase is storing for us
// avoid logout when refresh
export function verifyAuth() {
  return function (dispatch) {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signOutUser());
      }
    });
  };
}

