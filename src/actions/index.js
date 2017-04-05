
//types of actions
export const FETCH_PHONE = 'FETCH_PHONE';
export const CREATE_PHONE = 'CREATE_PHONE';
export const DELETE_PHONE = 'DELETE_PHONE';

export function fetchPhone(phone) {
  return {
    type: FETCH_PHONE,
    payload: phone
  };
}

//props = name, phoneNumber
export function createPhone(values) {
  return {
    type: CREATE_PHONE,
    payload: values
  };
}

export function deletePhone(id) {
  return {
    type: DELETE_PHONE,
    payload: id
  };
}