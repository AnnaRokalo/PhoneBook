import { combineReducers } from 'redux';
 import PhonesListReducer from './reducer__phonesList';
import PhoneReducer from './reducer_phones';

const rootReducer = combineReducers({
  phones: PhonesListReducer,
  phone: PhoneReducer
});

export default rootReducer;
