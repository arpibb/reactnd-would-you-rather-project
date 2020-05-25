import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Route, Switch ,Redirect } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import Leaderboard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import LoadingBar from 'react-redux-loading'
import NotFoundPage from './NotFoundPage'
import PrivateRoute from './PrivateRoute'
import '../styles/App.scss'
import QuestionRoute from './QuestionRoute'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
    
  }
  render(){
    const { noAuth, authedUser } = this.props
    console.log(authedUser)
    console.log(noAuth)
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: '#E07A5F' }}/>
        <Nav/>
        <section id='main-section'>
          <Switch>
            <Route exact path='/' render={(props)=>{
              console.log(props.location)
              if(noAuth && props.location.state !== null){
                  return(
                    <Login noAuth={noAuth}/>
                  )
              }
              else if(noAuth){
                return(
                  <Login/>
                )
              }
              else{
                return(
                  <Home />
                )
              }
              }
            } />
            <PrivateRoute exact path='/add' noAuth={noAuth} component={NewQuestion} />
            <PrivateRoute exact path='/leaderboard' noAuth={noAuth} component={Leaderboard} />
            <PrivateRoute path='/question/:id' noAuth={noAuth} component={QuestionRoute} />
            <Route path="/*" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch> 
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
