export const INITIAL_STATE = {phones: [], phoneNumber: null};

export default function (state = INITIAL_STATE, action) {
  switch(action.type){
    case 'PHONE_EDIT':
      return action.payload;
  }

  return state;
}