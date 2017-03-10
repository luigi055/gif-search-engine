import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actions';

const initialState = {
  selectedGif: null,
  modalIsOpen: false,
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { 
        ...state,
        modalIsOpen: true,
        selectedGif: action.payload,
      };
    case CLOSE_MODAL:
      return { 
        ...state, 
        modalIsOpen: false,
        selectedGif: null,
      };
    default:
      return state;
  }
}

export default modalReducer;
