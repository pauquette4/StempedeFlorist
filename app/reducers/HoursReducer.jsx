import { shopHours } from '../shop_hours/EditHours';
import { SET_HOURS } from '../actions/Actions';
var update = require('react/lib/update')

export default function reducer(state = shopHours, action) {
  switch(action.type) {
    case SET_HOURS:
    var newTime = update(state, {[action.index]: {
                                        open: {$set: action.initialOpen},
                                        close: {$set: action.initialClose},
                                      }})
    return {
      ...state,
      newTime
    }
    default:
      return state
  }
}
