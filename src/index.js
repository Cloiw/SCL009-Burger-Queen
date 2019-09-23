import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import MenuView from './views/MenuView';
import KitchenView from './views/KitchenView';
import * as serviceWorker from './serviceWorker';
import OrdersReadyView from './views/OrdersReadyView';
import RecordView from './views/RecordView';


const routing = (
  <Router basename="/SCL009-Burger-Queen/">
    <Switch>
      <Route exact path='/' component = {MenuView} />
      <Route path='/Kitchen' component = {KitchenView} />
      <Route path="/OrdersReady" component = {OrdersReadyView} />
      <Route path="/Record" component = {RecordView} />
    </Switch>
  </Router>
)

ReactDOM.render(
    routing, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
