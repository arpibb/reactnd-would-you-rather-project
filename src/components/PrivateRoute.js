import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest)
  return(
  <Route {...rest} render={(props) => (
    rest.noAuth === false
      ? <Component {...props} />
      : <Redirect to='/'/>
      // <Redirect to={{
      //     pathname: '/',
      //     state: { from: props.location }
      //   }} />
  )} />)}

export default PrivateRoute