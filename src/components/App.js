import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { receiveUsers } from '../actions/users'



class App extends Component {
  componentDidMount(){
    this.props.dispatch(receiveUsers())
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    );
  } 
}

function mapStateToProps({users}){
  return {
    loading: users === undefined
  }
}

export default connect(mapStateToProps)(App);
