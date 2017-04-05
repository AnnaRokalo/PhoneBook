import { combineReducers } from 'redux';
import PhoneReducer from './reducer_phones';
import { modelReducer, formReducer,  actions } from 'react-redux-form';

const initialAddPhoneUserState = {
  contactName: '',
  phoneNumber: ''
};
const rootReducer = combineReducers({
  phones: PhoneReducer,
  addPhone: modelReducer('addPhone', initialAddPhoneUserState),
  addForm: formReducer('addPhone')
});

export default rootReducer;
