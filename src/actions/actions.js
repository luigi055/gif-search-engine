import axios from 'axios';

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
