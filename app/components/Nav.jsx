import React from 'react';
import {Link, IndexLink} from 'react-router';
import DayList from './DayList';

export default class Nav extends React.Component {
  constructor(){
    super();
    this.state = {
      dayList: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({dayList: !this.state.dayList});
  }

  home() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Stempede Florist</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><IndexLink to='/'>Home</IndexLink></li>
              <li><Link to='/sethours'>Set Hours</Link></li>
              <li onClick={this.handleToggle}><Link to='/hours'>Hours</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  hours () {
    const { shopHours, activeDay } = this.props
    var dayList = shopHours.map((shopHours, index) => {
      return <DayList key={index} shopHours={shopHours} activeDay={activeDay} />
    })
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Stempede Florist</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li onClick={this.handleToggle}><IndexLink to='/'>Home</IndexLink></li>
              <li><Link to='/sethours'>Set Hours</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hours <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {dayList}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    )
  }

  render (){
    const { shopHours, activeDay } = this.props
    var dayList = shopHours.map((shopHours, index) => {
      return <DayList key={index} shopHours={shopHours} activeDay={activeDay} />
      });
   return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Stempede Florist</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li onClick={this.handleToggle}><IndexLink to='/'>Home</IndexLink></li>
              <li><Link to='/sethours'>Set Hours</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hours <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {dayList}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
