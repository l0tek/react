import React, { Component } from 'react';
import Navigation from './components/Navigation'; 
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import { Button } from 'reactstrap';
const Auth = new AuthService();


class Protected extends Component {


  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
 }

  render() {
    return (
    <div>
      <Navigation />
        <div className="container-fluid pt-3">
          <h2>Welcome {this.props.user.username}</h2>
          <Button className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</Button>
      </div>      
    </div>
    );
  }
}

export default withAuth(Protected);
