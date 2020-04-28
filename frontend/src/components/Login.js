import React, { Component } from 'react';
import fire from '../config/Fire';
import '../components/Login.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className ="login">
          <div class="login2">
            <label for="exampleInputEmail1"><h3 class="text-success" >Email address</h3></label><br></br>
            <input 
                value={this.state.email} 
                onChange={this.handleChange} 
                type="email" 
                name="email"  
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" />
              <br></br>
       
        <br></br>


        
          <label for="exampleInputPassword1"><h3 class="text-success">Password</h3></label><br></br>
          <input 
              value={this.state.password} 
              onChange={this.handleChange} 
              type="password" 
              name="password" 
              id="exampleInputPassword1" 
              placeholder="Password" />
       
       <br/><br/>
        <button 
            type="submit" 
            onClick={this.login} 
            class="btn btn-primary">
              Login
        </button>

        <button 
            onClick={this.signup} 
            style={{marginLeft: '25px'}} 
            className="btn btn-success">
              Sign-up
        </button>
    
        </div>
      </div>
    );
  }
}
export default Login;