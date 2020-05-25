import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'
import SignInRequestAlert from './SignInRequestAlert'
import '../styles/App.scss'
import logo from "../static/images/react-redux-logo.png"

class Login extends Component {
  state = {
    authedUser: '',
    isUserSelected: false,
    noUserSelected: false,
  }

  componentDidMount(){
    console.log("authedUser",this.props.authedUser)
    if(this.props.noAuth ){
      this.setState(()=>({
        noUserSelected: true,
      }))
    }
  }

  handleChange = (e) => {
    const selected = e.target.value
    console.log("selected", selected)
    this.setState(()=>({
      authedUser: selected,
      isUserSelected: true,
    }))
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.isUserSelected){
      this.props.dispatch(setAuthedUser(this.state.authedUser))
      this.props.history.push("/")
    }
    else{
      this.setState(()=>({
        noUserSelected: true,
      }))
    }
  }

  render(){
    const { users } = this.props
    const { noUserSelected } = this.state
    
    return(
      <div>
        {noUserSelected && <SignInRequestAlert />}
        <div id="sign-in-container">
          <div className="welcome">
            <h3>Welcome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </div>
          <div className="form-container">
            <img id="main-logo" src={logo} alt="App Logo"/>
            <h3>Sign In</h3>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} required>
              <select defaultValue='select user'>
                <option value="select user" disabled>Select User</option>
                {users && users.map((user) => {
                  return (
                  <option key={user.id} value={user.id}>{user.name}</option>
                  )
                })}
              </select>
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users, authedUser}){
  return {
    authedUser,
    users: Object.keys(users).map(user => users[user])
  }
}

export default withRouter(connect(mapStateToProps)(Login))