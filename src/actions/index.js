
//types of actions
export const CREATE_PHONE = 'CREATE_PHONE';
export const DELETE_PHONE = 'DELETE_PHONE';


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