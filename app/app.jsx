import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/Store';
import Main from './components/Main';
import Home from './components/Home';
import Hours from './components/Hours';
import SetHours from './components/SetHours';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <Route path="/hours" component={Hours}/>
          <Route path="/sethours" component={SetHours}/>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('app')
);
