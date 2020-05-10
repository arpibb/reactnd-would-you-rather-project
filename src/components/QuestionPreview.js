import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

class QuestionPreview extends Component{
  render(){
    const {authedUser, users, questions, id} = this.props
    const questionAuthor = users[questions[id].author]
    return (
      <div className="question-preview-card">
        <div className="name-display">
          <p>{questionAuthor.name} asks:</p>
        </div>
        <div className="info-container">
          <div className="avatar-container">
            <img className="avatar-big" src={questionAuthor.avatarURL} alt={`Avatar of ${questionAuthor.name}`}></img>
          </div>
          <div className="question-preview-container">
            <p>Would you rather</p>
            <p>...{questions && questions[id].optionOne.text.slice(0,-3)}...</p>
            <button>View Poll</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser,users,questions}, {id}){
  return {
    authedUser,
    users,
    questions,
    id
  }
}

export default connect(mapStateToProps)(QuestionPreview)