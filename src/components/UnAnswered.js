import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import '../styles/App.scss'

class UnAnswered extends Component{
  state = {
    checked: 'optionOne'
  }

  handleChange = (e) => {
    const value = e.target.id
    this.setState(()=>({
      checked: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {dispatch, qid, authedUser} = this.props
    const { checked } = this.state
    dispatch(handleSaveQuestionAnswer(authedUser,qid,checked))

  }

  render(){
    const { qid, users, questions} = this.props
    
    const questionAuthor = users[questions[qid].author]
    const optionOneText = questions[qid].optionOne.text
    const optionTwoText = questions[qid].optionTwo.text

    return(
      <div className="question-card unanswered">
        <div className="name-display">
          <p>{questionAuthor.name} asks:</p>
        </div>
        <div className="info-container">
          <div className="avatar-container">
            <img className="avatar-big" src={questionAuthor.avatarURL} alt={`Avatar of ${questionAuthor.name}`}></img>
          </div>
          <div className="question-container">
            <p className="head-text">Would You Rather ...</p>
            { questions &&
              <form onSubmit={this.handleSubmit}>
                <input type="radio" id="optionOne" name="answers" value={optionOneText} onChange={this.handleChange} checked={this.state.checked === 'optionOne'}/>
                <label htmlFor="optionOne" id="optionOne">{`${optionOneText}?`}</label><br/>
                <input type="radio" id="optionTwo" name="answers" value={optionTwoText} onChange={this.handleChange} checked={this.state.checked === 'optionTwo'}/>
                <label htmlFor="optionTwo" id="optionTwo">{`${optionTwoText}?`}</label><br/>
                <button type="submit" className="view-poll">Submit</button>
              </form>
            }
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

export default connect(mapStateToProps)(UnAnswered)