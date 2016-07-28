import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    shopHours: store.shopHours,
    activeDay: store.activeDay
  }
})

export default class Hours extends React.Component {

  handleToggle(name) {
    var change = {};
    change[name] = false;
    this.setState(change);
    console.log(storeHours);
  }

  timeTranslate() {
    const {active} = this.props.activeDay
    var hoursList = [];
    for(var i = 0; i < active.open.length; i ++ ) {

      var o = active.open[i]
      var c = active.close[i]

      var openHours = Math.floor(o/60);
      var closeHours = Math.floor(c/60);

      var openMinutes = o % 60;
      var closeMinutes = c % 60;

      if (openMinutes < 10) {
        openMinutes = '0' + openMinutes;
      }
      if (closeMinutes < 10) {
        closeMinutes = '0' + closeMinutes;
      }

      var openAP = openHours % 24 < 12 ? 'am' : 'pm';
      var closeAP = closeHours % 24 < 12 ? 'am' : 'pm';

      openHours = openHours % 12;
      closeHours = closeHours % 12;

      if (openHours === 0){
        openHours = 12;
      }
      if (closeHours === 0){
        closeHours = 12;
      }

      var openString = openHours+":" + openMinutes + openAP
      var closeString = closeHours+":" + closeMinutes + closeAP

      hoursList.push(<div>{openString} - {closeString}</div>)
    }

    return hoursList;
  }

  render(){
    const {active} = this.props.activeDay
    const hours = active.map
    return (
      <div className="well">
        <h1>{active.day}</h1>
        <h2>Open: </h2>
        <p className="lead">{this.timeTranslate(this)} </p>
      </div>
    )
  }
}
