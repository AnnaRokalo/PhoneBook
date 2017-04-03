
//types of actions
export const FETCH_PHONE = 'FETCH_PHONE';
export const CREATE_PHONE = 'CREATE_PHONE';

export function fetchPhone(phone) {
  return {
    type: FETCH_PHONE,
    payload: phone
  };
}

export function createPhone(props) {
  return {
    type: CREATE_PHONE,
    payload: props
  };
}