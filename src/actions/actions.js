import axios from 'axios';
import { browserHistory } from 'react-router';

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

const API_KEY = 'api_key=dc6zaTOxFJmzC';
const API_URL = `http://api.giphy.com/v1/gifs/search?q=`;

export function requestGifs(term = null) {
  const request = axios.get(`${API_URL}${encodeURIComponent(term)}&${API_KEY}`);
  return {
    type: REQUEST_GIFS,
    payload: request,
  };
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

export function signInUser() {
  browserHistory.push('/favorites');
  return {
    type: SIGN_IN_USER,
  };
}

export function signOutUser() {
  browserHistory.push('/');

  return {
    type: SIGN_OUT_USER,
  };
}
