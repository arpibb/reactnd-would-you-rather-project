import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import Leaderboard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import LoadingBar from 'react-redux-loading'
import '../styles/App.scss'
import QuestionRoute from './QuestionRoute'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
    
  }
  render(){
    const { noAuth, authedUser } = this.props
    console.log(authedUser)
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: '#E07A5F' }}/>
        <Nav/>
        <section id='main-section'>
        {noAuth === true
            ? <Login/>
            : <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/new_question' component={NewQuestion} />
                <Route exact path='/leaderboard' component={Leaderboard} />
                <Route path='/question/:id' render={(props)=>{
                  return(
                    <QuestionRoute qid={props.match.params.id} />
                  )
              }} />
              </div>}
        </section>
      </Fragment>
    );
  } 
}

function mapStateToProps({authedUser}){
  return {
    noAuth: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
