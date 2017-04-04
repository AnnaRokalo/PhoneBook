
//types of actions
export const FETCH_PHONE = 'FETCH_PHONE';
export const CREATE_PHONE = 'CREATE_PHONE';

export function fetchPhone(phone) {
  return {
    type: FETCH_PHONE,
    payload: phone
  };
}

//props = name, phoneNumber
export function createPhone(props) {
  console.log(props);
  return {
    type: CREATE_PHONE,
    payload: props
  };
}