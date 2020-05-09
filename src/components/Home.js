import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

class Home extends Component{
  state = {
    answered: true,
  }

  handleAnswers = (isAnsweredNeeded) => {
    const value = isAnsweredNeeded
    this.setState(()=>({
      answered: value
    }))
  }

  filterQuestions = (question,authedUser,answeredNeeded) => {
    if(answeredNeeded){
      return question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    }
    else{
      return !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)
    }
  }

  sortQuestionsByTimestamp = (a,b) => {
    return b.timestamp - a.timestamp
  }


  render(){
    const { answered } = this.state
    const { authedUser, users, questions } = this.props
    return(
      <div className="home-container">
        <div className="buttons-container">
          <div className="answer-btn" onClick={()=>this.handleAnswers(false)}>
            <p>Unanswered Questions</p>
          </div>
          <div className="answer-btn" onClick={()=>this.handleAnswers(true)}>
            <p>Answered Questions</p>
          </div>
        </div>
        <div className="answers-container">
          {questions && questions.filter(question => this.filterQuestions(question,authedUser,answered))
            .sort((a,b)=> this.sortQuestionsByTimestamp(a,b))
              .map(question => (
            <p>{question.id}</p>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser,users,questions}){
  return {
    authedUser,
    users,
    questions: Object.keys(questions).map(question => questions[question])
  }
}

export default connect(mapStateToProps)(Home)