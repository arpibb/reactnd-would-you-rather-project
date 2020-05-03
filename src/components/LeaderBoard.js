import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class LeaderBoard extends Component{
  render(){
    const { users } = this.props
    return(
      <div>
        {users && users.map((user)=>{
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

export default connect(mapStateToProps)(LeaderBoard)

