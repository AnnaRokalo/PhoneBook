
//types of actions

export const FETCH_PHONE = 'FETCH_PHONE';

export function fetchPhone(phone) {
  return {
    type: FETCH_PHONE,
    payload: phone
  };
}