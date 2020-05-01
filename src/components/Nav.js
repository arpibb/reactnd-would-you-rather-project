import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Nav extends Component {
  signOutUser = () => {
    this.props.dispatch(setAuthedUser(null))
  }
  render(){
    const { authedUser, users} = this.props
    return(
      <nav>
        <ul>
          <li>Home</li>
          <li>New Question</li>
          <li>Leaderboard</li>
        </ul>
        {authedUser !== null && users && 
          <ul>
            <li>
              <p>Hello {users[authedUser].name}!</p>
            </li>
            <li>
              <button onClick={this.signOutUser}>Sign Out</button>
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