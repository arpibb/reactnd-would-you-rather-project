import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import '../styles/App.scss'

class QuestionCard extends Component{
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
    const {dispatch, qid} = this.props
    const { checked } = this.state
    dispatch(handleSaveQuestionAnswer(qid,checked))
  }

  render(){
    console.log(this.props.qid)
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
            <form onSubmit={this.handleSubmit}>
              <input type="radio" id="optionOne" name="answers" value=""
                checked onChange={this.handleChange}></input>
              <input type="radio" id="optionTwo" name="answers" value="" onChange={this.handleChange}></input>
              <button type="submit">Submit</button>
            </form>
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

export default connect(mapStateToProps)(QuestionCard)