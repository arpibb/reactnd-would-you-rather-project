import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import LoadingBar from 'react-redux-loading'
import '../styles/App.scss'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    const { noAuth, authedUser } = this.props
    console.log(authedUser)
    return (
      <Router>
        <LoadingBar/>
        <Nav/>
        <section id='main-section'>
        {noAuth === true
            ? <Login/>
            : <div>
                <Route path='/' exact component={Home} />
                <Route path='/new_question' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
              </div>}
        </section>
      </Router>
    );
  } 
}

function mapStateToProps({authedUser}){
  return {
    noAuth: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
