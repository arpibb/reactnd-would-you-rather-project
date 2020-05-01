import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import '../styles/App.scss'


class Nav extends Component {
  signOutUser = () => {
    this.props.dispatch(setAuthedUser(null))
  }
  render(){
    const { authedUser, users} = this.props
    return(
      <nav>
        <ul id="steady-nav-items">
          <li>Home</li>
          <li>New Question</li>
          <li>Leaderboard</li>
        </ul>
        {authedUser !== null && authedUser !== undefined && users && 
          <ul id="signed-in-nav-items">
            <li>
              <p>Hello {authedUser && users[authedUser].name}!</p>
            </li>
            <li>
              <span><img className="avatar-small" src={authedUser && users[authedUser].avatarURL} alt="User Avatar"/></span>
            </li>
            <li>
              <button id="sign-out" onClick={this.signOutUser}>Sign Out</button>
            </li>
          </ul>
        }
        
      </nav>
    )
  }
}

function mapStateToProps({authedUser, users}){
  return{
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Nav)