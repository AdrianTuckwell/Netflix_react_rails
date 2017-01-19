const React = require('react')
const LinkedStateMixin = require('react-addons-linked-state-mixin')

const SignUp = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {email:"", password:"", passwordConfirmation:""}
  },

  signUp:function(e){
    e.preventDefault()
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 201){
        let user = JSON.parse(request.responseText)
        this.props.onSignUp(user)
      }
    }
    const data = {
      user:{
        email:this.state.email,
        password:this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }
    }
    request.send(JSON.stringify(data))
  },
  
  render: function() {
    return (
      <form onSubmit={this.signUp} className='login-form'>
        <input type="text" valueLink={this.linkState('email')}  placeholder="Email" />
        <input type="password" valueLink={this.linkState('password')}  placeholder="Password" />
        <input type="password" valueLink={this.linkState('passwordConfirmation')}  placeholder="Password Confirmation" />

        <button type="submit">  Sign Up </button>
      </form>
    )
  }
})

module.exports = SignUp