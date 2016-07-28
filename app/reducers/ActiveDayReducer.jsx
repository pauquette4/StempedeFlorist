import { CHANGE_DAY } from '../actions/Actions';
var update = require('react/lib/update')

const initialState = {
  active:{
    day: "",
    open: 0,
    close: 0,
    index: 0
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_DAY :
      var active = update(state.active, {
                                          day: {$set: action.day},
                                          open: {$set: action.open},
                                          close: {$set: action.close},
                                          index: {$set: action.index}
                                        })
      return {
        ...state,
        active
      }
    default:
      return state
  }
}
