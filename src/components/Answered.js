import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

class Answered extends Component{
  render(){
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