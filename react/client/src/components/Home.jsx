const React = require('react')
const { Link } = require('react-router')
const LoginBox = require('../auth/LoginBox')

const Home = () => (
  <div className="home">
    <h1 className='title'>notflix</h1>
    <LoginBox />
  </div>
)

module.exports = Home