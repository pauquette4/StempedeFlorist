import React from 'react';
import * as actions from '../actions/Actions';
import { connect } from 'react-redux';

// let createHandlers = function(dispatch) {
//   let setHours = function (index, initialOpen, initialClose) {
//     dispatch(actions.setHours(shopHours.index, initialOpen, initialClose))
//   };
//
//   return {
//     setHours,
//   }
// }

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    // this.handlers = createHandlers(this.props.dispatch);
  }

  timeDrop() {
      for(var i = 0; i <= 1440; i += 5) {
        var hours = Math.floor(i/60);
        var minutes = i % 60;
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        var ap = hours % 24 < 12 ? 'am' : 'pm';
        hours = hours % 12;
        if (hours === 0){
          hours = 12;
        }
        // $(className).append($('<option></option>')
        //             .attr('value', i)
        //             .text(hours + ':' + minutes + ap));
      }
    }
  defaultTimes() {
    const {shopHours} = this.props;
    const { day, open} = shopHours;
    for (var i = 0; i <= shopHours.length; i++) {
      for (var n = 0; n <= open.length; i++) {
        return open[i];
        console.log(open[i]);
        console.log("running loop")
      }
    }
    console.log("shopHours length: ", shopHours.length);
  }

  // handleSubmit(index, initialOpen, e) {
  //   e.preventDefault();
  //
  //   console.log(index, initialOpen)
  // }

  render(){
    return(
      <div>
        <button onClick={this.defaultTimes.bind(this)} />
      </div>
    );
  }
}

// export default connect()(Schedule)
