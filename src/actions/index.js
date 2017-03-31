
//types of actions
export const CREATE_RECORD = 'CREATE_RECORD';
export const FETCH_PHONE = 'FETCH_PHONE';
export const DELETE_RECORD = 'DELETE_RECORD';

export function fetchPhone(phone) {
  return {
    type: FETCH_PHONE,
    payload: phone
  };
}

