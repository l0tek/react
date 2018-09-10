import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page2 from './Page2';
import Home from './Home'; 
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2} />
      </React.Fragment>
    </Router>),
    document.getElementById('root')
  );
  
registerServiceWorker();
