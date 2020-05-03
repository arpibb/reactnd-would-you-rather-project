import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCard extends Component{
  render(){
    const { users, id } = this.props
    const { name, avatarURL, answers, questions } = users[id]
    const answeredQuestionsNum = Object.keys(answers).length
    const createdQuestionsNum = questions.length
    return(
      <div className="usercard">
        <div className="avatar-container">
          <img src={avatarURL} alt={`Avatar of ${name}`}/>
        </div>
        <div>
          <h3>{name}</h3>
          <span>Answered questions</span><span>{answeredQuestionsNum}</span>
          <span>Created questions</span><span>{createdQuestionsNum}</span>
        </div>
        <div>
          <div>
            <h4>Score</h4>
            <h3>{answeredQuestionsNum + createdQuestionsNum}</h3>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users},{id}){
  return {
    users,
    id
  }
}

export default connect(mapStateToProps)(UserCard)