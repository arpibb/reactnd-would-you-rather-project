import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component{
  render(){
    return(
      <div>
        {}
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

