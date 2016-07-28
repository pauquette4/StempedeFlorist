import {combineReducers} from 'redux';
import shopHours from './HoursReducer';
import activeDay from './ActiveDayReducer';

export default combineReducers({
  activeDay,
  shopHours
})
