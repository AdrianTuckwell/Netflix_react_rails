const React = require('react')
const { Link } = require('react-router')

const SignOut = React.createClass({

  signOut: function(e){
    e.preventDefault()
    const request = new XMLHttpRequest()
    request.open("DELETE", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      console.log("signed out", request.status)
      if(request.status === 204){
        this.props.onSignOut(null)
      }
    }
    request.send()
  },

  render: function(){
    return (
      <div>
        <button onClick={this.signOut}>Sign Out</button>
        <Link className="shows-link" to="/shows">View Shows</Link>
      </div>
    )
  }


})

module.exports = SignOut