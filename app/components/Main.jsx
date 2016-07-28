import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import { changeDay } from '../actions/Actions';

@connect((store) => {
  return {
    shopHours: store.shopHours,
    activeDay: store.activeDay
  }
})

export default class Main extends React.Component {
  render() {
    const { activeDay, shopHours } = this.props
    return (
      <div>
        <Nav shopHours = {shopHours} activeDay = {activeDay} />
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}
