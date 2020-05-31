import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink, withRouter } from 'react-router-dom'
import '../styles/App.scss'


class Nav extends Component {
  signOutUser = () => {
    this.props.dispatch(setAuthedUser(null))
    this.props.history.push("/")
  }
  render(){
    const { authedUser, users } = this.props
    return(
      <nav>
        <ul id="steady-nav-items">
          <NavLink to='/' exact className="listItem">Home</NavLink>
          <NavLink to='/add' exact className="listItem">New Question</NavLink>
          <NavLink to='/leaderboard' exact className="listItem">Leaderboard</NavLink>
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

export default withRouter(connect(mapStateToProps)(Nav))