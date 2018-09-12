import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Page2 from './Page2';
import Home from './Home'; 
import Protected from './Protected'
import Login from './components/login';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap.min.css';



ReactDOM.render((
    <Router >
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2} />
        <Route path="/login" component={Login} />
        <Route path='/protected' component={Protected} />
      </React.Fragment>
    </Router>),
    document.getElementById('root')
  );
  
registerServiceWorker();
