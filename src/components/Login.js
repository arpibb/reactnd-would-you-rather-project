import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {
  state = {
    authedUser: '',
  }

  componentDidMount(){
    console.log("authedUser",this.props.authedUser)
  }

  handleChange = (e) => {
    const selected = e.target.value
    console.log(selected)
    this.setState(()=>({
      authedUser: selected
    }))
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state.authedUser)
    this.props.dispatch(setAuthedUser(this.state.authedUser))
  }

  render(){
    const { authedUser,users } = this.props
    //console.log(users)
    return(
      <div>
        <div>
          <h2>Welcome to the would you rather App!</h2>
          <p>Please sign in to continue</p>
        </div>
        <div>
          <img src="./" alt="App Logo"/>
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange} required>
            <select>
              <option selected="selected" disabled>Select User</option>
              {users && users.map((user) => {
                return (
                <option key={user.id} value={user.id}>{user.name}</option>
                )
              })}
            </select>
            <button type="submit">Sign In</button>
          </form>
            {authedUser && <p>{authedUser}</p>}
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

export default connect(mapStateToProps)(Login)