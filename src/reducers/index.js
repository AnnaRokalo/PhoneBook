import { combineReducers } from 'redux';
import PhonesListReducer from './reducer__phonesList';
import EditReducer from './reducer_phone';

const rootReducer = combineReducers({
  phones: PhonesListReducer,
  phoneNumber: EditReducer
});

export default rootReducer;
