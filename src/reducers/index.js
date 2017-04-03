import { combineReducers } from 'redux';
import PhonesListReducer from './reducer_phonesList';
import PhoneReducer from './reducer_phones';
import  { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  phones: PhonesListReducer,
  phone: PhoneReducer,
  form: formReducer
});

export default rootReducer;
