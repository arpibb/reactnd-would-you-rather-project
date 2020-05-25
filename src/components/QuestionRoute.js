import React, { Component } from 'react'
import { connect } from 'react-redux'
import Answered from './Answered'
import UnAnswered from './UnAnswered'
import {Redirect} from 'react-router-dom'

class QuestionRoute extends Component{
  render(){
    const {authedUser, users,questions, qid} = this.props
    const isAnswered = users[authedUser].answers.hasOwnProperty(qid)
    const questionExists = questions.hasOwnProperty(qid)
    return(
      <div>
        { !questionExists && <Redirect to='/*'/>}
        { isAnswered ? <Answered qid={qid}/> : <UnAnswered qid={qid}/>}
      </div>
    )
  }
}

function mapStateToProps({authedUser,users,questions}, {qid}){
  return {
    authedUser,
    users,
    questions,
    qid,
  }
}

export default connect(mapStateToProps)(QuestionRoute)