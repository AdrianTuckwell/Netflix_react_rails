const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./components/Home')
const Listing = require('./components/Listing')
const Main = require('./components/Main')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter

const App = React.createClass({

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/shows' component={Listing} />
        </Route>
      </Router>
    )
  }
})


ReactDOM.render(<App />, document.getElementById('app'))
