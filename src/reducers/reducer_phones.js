import { FETCH_PHONE  } from '../actions/index';

const INITIAL_STATE = { phone: null };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PHONE:
      return {...state, phone: action.payload};

    default:
      return state;
  }
}