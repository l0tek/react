import React, { Component } from 'react';
import Navigation from './components/Navigation'; 

class Home extends Component {
  render() {
    return (
    <div>
      <Navigation />
        <div className="container-fluid pt-3">
          <h1>Home</h1>
      </div>      
    </div>
    );
  }
}

export default Home;
