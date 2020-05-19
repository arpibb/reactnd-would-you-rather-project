import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

class Answered extends Component{
  render(){
    const { qid, users, questions} = this.props
    const questionAuthor = users[questions[qid].author]
    const optionOneText = questions[qid].optionOne.text
    const optionTwoText = questions[qid].optionTwo.text
    const numOptionOne = questions[qid].optionOne.votes.length
    const numOptionTwo = questions[qid].optionTwo.votes.length
    const numSum = numOptionOne + numOptionTwo
    const widthOptionOne = numOptionOne/ numSum * 100
    const widthOptionTwo = 100 - widthOptionOne

    return(
      <div className="question-card answered">
        <div className="name-display">
          <p>Asked by {questionAuthor.name}</p>
        </div>
        <div className="info-container">
          <div className="avatar-container">
            <img className="avatar-big" src={questionAuthor.avatarURL} alt={`Avatar of ${questionAuthor.name}`}></img>
          </div>
          <div className="question-container">
            <p>Results: </p>
            <div className="option-result">
              <p>Would you rather {optionOneText}</p>
              <div className="show-result-border">
                <div className="show-result" style={{width: `${widthOptionOne}%`}}>{widthOptionOne}%</div>
              </div>
              <p>{numOptionOne} out of {numSum} votes</p>
            </div>
            <div className="option-result">
              <p>Would you rather {optionTwoText}</p>
              <div className="show-result-border">
              <div className="show-result" style={{width: `${widthOptionTwo}%`}}>{widthOptionTwo}%</div>
              </div>
              <p>{numOptionTwo} out of {numSum} votes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions},{qid}){
  return{
    qid,
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(Answered)