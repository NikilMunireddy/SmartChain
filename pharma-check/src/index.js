import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';


ReactDOM.render(
<Router>
    <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route component={Page404} />
    </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
