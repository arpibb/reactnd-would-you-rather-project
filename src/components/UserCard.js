import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

class UserCard extends Component{
  render(){
    const { users, id } = this.props
    const { name, avatarURL, answers, questions } = users[id]
    const answeredQuestionsNum = Object.keys(answers).length
    const createdQuestionsNum = questions.length
    return(
      <div className="usercard">
        <div className="avatar-container">
          <img className="avatar-big" src={avatarURL} alt={`Avatar of ${name}`}/>
        </div>
        <div className="description-container">
          <h2>{name}</h2>
          <p><span>Answered questions</span><span className="right-span-score">{answeredQuestionsNum}</span></p>
          <hr/>
          <p><span>Created questions</span><span className="right-span-score">{createdQuestionsNum}</span></p>
        </div>
        <div className="score-container">
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