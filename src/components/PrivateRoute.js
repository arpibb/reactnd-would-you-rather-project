import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
  <Route {...rest} render={(props) => {
    return(
    rest.noAuth === false
      ? <Component {...props} qid={props.match.params.id} />
      : <div>
           <Redirect to={{
              pathname: '/',
              state: { from: props.location }
            }} />
        </div>

      )
      
}} />)}

export default PrivateRoute