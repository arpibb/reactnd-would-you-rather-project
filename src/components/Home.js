import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

class Home extends Component{
  state = {
    answered: false,
  }

  handleFlip = () => {
    this.setState((prevState)=>({
      answered: !prevState.answered
    }))
  }


  render(){
    const { answered } = this.state
    const { authedUser, users, questions } = this.props
    return(
      <div className="home-container">
        <div className="buttons-container">
          <div className="answer-btn">
            <p>Unanswered Questions</p>
          </div>
          <div className="answer-btn">
            <p>Answered Questions</p>
          </div>
        </div>
        <div className="answers-container">
          
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser,users,questions}){
  return {
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(Home)