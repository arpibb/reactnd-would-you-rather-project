import React, { Component } from 'react'
import { connect } from 'react-redux'
import Answered from './Answered'
import UnAnswered from './UnAnswered'

class QuestionRoute extends Component{
  render(){
    const {authedUser, users, qid} = this.props
    const isAnswered = users[authedUser].answers.hasOwnProperty(qid)
    return(
      <div>
        { isAnswered ? <Answered qid={qid}/> : <UnAnswered qid={qid}/>}
      </div>
    )
  }
}

function mapStateToProps({authedUser,users}, {qid}){
  return {
    authedUser,
    users,
    qid,
  }
}

export default connect(mapStateToProps)(QuestionRoute)