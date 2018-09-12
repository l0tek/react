import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';
import AuthService from './AuthService';
import { Button, Form, Input } from 'reactstrap';


class Login extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  render() {
      return (
      <div className="wrapper">
        <Form className="form-signin" onSubmit={this.handleFormSubmit}>       
          <h2 className="form-signin-heading">Login</h2>
          <div className="form-group">
          <Input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" onChange={this.handleChange} />
          </div>
          <div className="form-group">
          <Input type="password" className="form-control" name="password" placeholder="Password" required="" onChange={this.handleChange} />    
          </div>  
          <Button color="primary" className="btn btn-block btn-primary" type="submit">Login</Button>   
        </Form>
      </div>
      )
  }



  handleChange(e){
    this.setState(
        {
          [e.target.name]: e.target.value
        }
    )
  }

  handleFormSubmit(e){
    e.preventDefault();
    this.Auth.login(this.state.username,this.state.password)
        .then(res =>{
           this.props.history.replace('/');
        })
        .catch(err =>{
            alert(err);
        })
}


}

  
  export default Login;