import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    shopHours: store.shopHours,
  }
})

export default class SetHours extends React.Component {

  defaultTimes() {
    const {shopHours} = this.props;
    var selects=[];
    var daysList = []
    for (var i = 0; i < shopHours.length; i++) {

      for (var n = 0; n < shopHours[i].open.length; n++) {
        var initOpen = shopHours[i].open[n];
        var initClose = shopHours[i].close[n];
        var nextOpenRows = []
        var initOpenRows = [];
        var initCloseRows = [];

        for(var y = initClose + 1; y <= 1440; y += 1) {
          var hours = Math.floor(y/60);
          var minutes = y % 60;
          if (minutes < 10) {
            minutes = '0' + minutes;
          }
          var ap = hours % 24 < 12 ? 'am' : 'pm';
          hours = hours % 12;
          if (hours === 0){
            hours = 12;
          }
          var timeStrings = hours+":" + minutes + ap
          nextOpenRows.push(<option key={y} value={y}>{timeStrings}</option>);
        }

        for(var z = initOpen; z <= 1440; z += 1) {
          var hours = Math.floor(z/60);
          var minutes = z % 60;
          if (minutes < 10) {
            minutes = '0' + minutes;
          }
          var ap = hours % 24 < 12 ? 'am' : 'pm';
          hours = hours % 12;
          if (hours === 0){
            hours = 12;
          }
          var timeStrings = hours+":" + minutes + ap
          initOpenRows.push(<option key={z*5} value={z}>{timeStrings}</option>);
        }

        for(var c = initClose; c <= 1440; c += 1) {
          var hours = Math.floor(c/60);
          var minutes = c % 60;
          if (minutes < 10) {
            minutes = '0' + minutes;
          }
          var ap = hours % 24 < 12 ? 'am' : 'pm';
          hours = hours % 12;
          if (hours === 0){
            hours = 12;
          }
          var timeStrings = hours+":" + minutes + ap
          initCloseRows.push(<option value={z}>{timeStrings}</option>);
        }

        selects.push(<select>{initOpenRows}</select>)
        selects.push(<select>{initCloseRows}</select>)
        selects.push(<select>{nextOpenRows}</select>)

      }
      daysList.push(<div><h1>{shopHours[i].day}</h1><table><tbody><tr>{selects}</tr></tbody></table></div>)
    }
    return daysList;
  }

  // handleSubmit(index, initialOpen, e) {
  //   e.preventDefault();
  //
  //   console.log(index, initialOpen)
  // }

  render(){
    var timeSelectors = this.defaultTimes(this);
    return(
      <div className="well">
        <form>
          <h1>Form Will Be Here</h1>
          {timeSelectors}
        </form>
      </div>
    );
  }
}


// <button onClick={this.defaultTimes.bind(this)} />

//   render() {
//     const { shopHours } = this.props
//     var schedule = shopHours.map((shopHours, index) => {
//       return <Schedule key={index} shopHours={shopHours} />
//     })
//     return (
//       <div>
//         {schedule}
//       </div>
//     )
//   }
// }
