import { combineReducers } from 'redux';
import PhoneReducer from './reducer_phones';

const initialAddPhoneUserState = {
  contactName: '',
  phoneNumber: ''
};
const rootReducer = combineReducers({
  phones: PhoneReducer
});

export default rootReducer;
