import { REQUEST_GIFS } from '../actions/actions';

function gifsReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state,
        data: action.payload.data.data,
      };
    default:
      return state;
  }
}

export default gifsReducer;
