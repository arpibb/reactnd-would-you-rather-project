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
import SignInRequestAlert from './SignInRequestAlert'


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
          <Switch>
            <Route exact path='/' render={()=>{
              if(noAuth){
                return(
                  <Fragment>
                    <Login/>
                  </Fragment>
                )
              }
              else{
                return(
                  <Fragment>
                    <Home/>
                  </Fragment>   
                )
              }
              }
            } />
            <Route exact path='/add' render={()=>{
              if(noAuth){
                return(
                  <Fragment>
                    <SignInRequestAlert/>
                    <Login/>
                  </Fragment>
                )
              }
              else{
                return(
                  <Fragment>
                    <NewQuestion/>
                  </Fragment>   
                )
              }
              }
            } />
            <Route exact path='/leaderboard' render={()=>{
              if(noAuth){
                return(
                  <Fragment>
                    <SignInRequestAlert/>
                    <Login/>
                  </Fragment>
                )
              }
              else{
                return(
                  <Fragment>
                    <Leaderboard/>
                  </Fragment>   
                )
              }
              }
            } />
            <Route path='/question/:id' render={(props)=>{
              if(noAuth){
                return(
                  <Fragment>
                    <SignInRequestAlert/>
                    <Login/>
                  </Fragment>
                )
              }
              else{
                return(
                  <QuestionRoute qid={props.match.params.id} />
                )
              }
            }}/>
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
