import React from 'react'
const SignIn = require('./SignIn')
const SignUp = require('./SignUp')

const LoginBox = React.createClass({

  getInitialState: function(){
    return {currentUser: null}
  },

  setUser: function(user){
    this.setState({currentUser: user})
  },

  fetchUser: function(){
    var request = new XMLHttpRequest();
    request.open('GET', this.props.url + "users.json");
    request.setRequestHeader('content_Type', 'application/json');
    request.withCredentials = true  //to alow it to return a ccookie
    
    request.onload = () => {
      if (request.status === 200){
        const receivedUser = JSON.parse(request.responseText);
        this.setUser(receivedUser)
      } 
      else if(request.status === 401){
          this.setUser(false)
      }
    }
    request.send();
  },

  componentDidMount: function(){
    this.fetchUser()
  },

  render: function () {
    var mainDiv = <div>
      <h4>Please Sign in/up</h4>
      <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>

      <SignUp url={this.props.url + "users/sign_up.json"} onSignIn={this.setUser}></SignUp>
    </div>
    if (this.state.currentUser){
      mainDiv = <div>
        <h4> Welcome {this.state.currentUser.email}</h4>
      </div>
    }
    return(
      <div>
        {mainDiv}
      </div>

      )
  }
})

module.exports = LoginBox

