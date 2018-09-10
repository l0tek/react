import React, { Component } from 'react';
import Navigation from './components/Navigation'; 

class Home extends Component {
  render() {
    return (
    <div>
      <Navigation />
      <div>
        <div className="container-fluid">
          <h1>Home</h1>
        </div>
      </div>      
    </div>
    );
  }
}

export default Home;
