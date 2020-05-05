import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import '../styles/App.scss'

class Unanswered extends Component{
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
    return(
      <div className="unanswered-card">
        <div className="card-top">
          <p>Name of the creator</p>
        </div>
        <div className="card-bottom">
          <div className="avatar-container">
            <img className="avatar-big" />
          </div>
          <div className="question-container">
            <p>Would You Rather ...</p>
            <form>
            <input type="radio" id="optionOne" name="answers" value=""
              checked></input>
              <input type="radio" id="optionTwo" name="answers" value=""
              ></input>
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

export default connect(mapStateToProps)(Unanswered)