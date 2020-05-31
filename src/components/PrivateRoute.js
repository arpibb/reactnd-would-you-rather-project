import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import SignInRequestAlert from './SignInRequestAlert'
import Login from './Login'

class PrivateRoute extends Component{
  render(){
  const { 
    authedUser, 
    component:Component, 
    ...rest 
  } = this.props

  return(
    <Route {...rest} render={(props) => {
    return(
      (authedUser !== null)
        ? <Component {...props} qid={props.match.params.id} />
        : <div>
            <SignInRequestAlert/>
            <Login/>
            {/* <Redirect to={{
                pathname: '/',
                state: { from: props.location }
              }} /> */}
          </div>
        )
}} />)}
}

function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(PrivateRoute)