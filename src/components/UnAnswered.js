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
    const { qid, authedUser, users, questions} = this.props
    const optionOneText = questions[qid].optionOne.text
    const optionTwoText = questions[qid].optionTwo.text
    console.log(optionTwoText)

    return(
      <div className="unanswered-card">
        <div className="card-top">
          <p>Name of the creator</p>
        </div>
        <div className="card-bottom">
          <div className="avatar-container">
            <img className="avatar-big" alt={`avatar of ${this.props.authedUser}`}/>
          </div>
          <div className="question-container">
            <p>Would You Rather ...</p>
            { questions &&
              <form onSubmit={this.handleSubmit}>
              <input type="radio" id="optionOne" name="answers" value={optionOneText} onChange={this.handleChange}/>
              <label>{optionOneText}</label>
              <input type="radio" id="optionTwo" name="answers" value={optionTwoText} onChange={this.handleChange} />
              <label>{optionTwoText}</label>
              <button type="submit">Submit</button>
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