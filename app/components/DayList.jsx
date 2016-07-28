import React from 'react';
import * as actions from '../actions/Actions';
import { connect } from 'react-redux';
import {Link, IndexLink} from 'react-router';

let createHandlers = function(dispatch) {
  let changeDay = function (day, open, close, index) {
    dispatch(actions.changeDay(day, open, close, index))
  };

  return {
    changeDay,
  }
}

class DayList extends React.Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
  }

  render(){
    const { shopHours } = this.props
    return(
      <li onClick={this.handlers.changeDay.bind(this,
                                             shopHours.day,
                                             shopHours.open,
                                             shopHours.close,
                                             shopHours.index)}><Link to='/hours'>
        {shopHours.day}</Link>
      </li>
    )
  }
}

export default connect()(DayList)
