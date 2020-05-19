import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'
import {Link, withRouter} from 'react-router-dom'

class QuestionPreview extends Component{

  render(){
    const { users, questions, id} = this.props
    const questionAuthor = users[questions[id].author]
    return (
      <div className="question-card">
        <div className="name-display">
          <p>{questionAuthor.name} asks:</p>
        </div>
        <div className="info-container">
          <div className="avatar-container">
            <img className="avatar-big" src={questionAuthor.avatarURL} alt={`Avatar of ${questionAuthor.name}`}></img>
          </div>
          <div className="question-container">
            <p>Would You Rather ...</p>
            <p>...{questions && questions[id].optionOne.text.slice(0,10)}...</p>
            <Link to={`/question/${id}`} className="view-poll-link"><button className="view-poll" onClick={this.showQuestionCard}>View Poll</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser,users,questions}, {id,answered}){
  return {
    authedUser,
    users,
    questions,
    id,
    answered
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPreview))