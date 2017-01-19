import React from 'react'

const LoginBox = React.createClass({

  getInitialState: function(){
    return {currentUser: null}
  },

  setUser: function(user){
    this.setState({currentUser: user})
  },

  fetchUser: function(){
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:5000/users.json");
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

  render () {
    var mainDiv = <div><h4>Please Sign in/up</h4></div>
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

