import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class Leaderboard extends Component{

  sortUsers = (a,b) => {
    return (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
  }

  render(){
    const { users } = this.props
    return(
      <div>
        {users && users.sort((a,b) => this.sortUsers(a,b)).map((user)=>{
          return(
            <UserCard key={user.id} id={user.id} />
          )
        })}
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

export default connect(mapStateToProps)(Leaderboard)

