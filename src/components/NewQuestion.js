import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import '../styles/App.scss'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  handleChange = (e) => {
    const value = e.target.value
    const stateName = e.target.name
    this.setState(()=>({
      [stateName]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props
    dispatch(handleSaveQuestion(optionOne,optionTwo))
    this.setState(()=>({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))

  }
  render(){
    const { toHome } = this.state

    if(toHome){
      return <Redirect to='/'/>
    }

    return(
      <div id="new-question-container">
        <div className="welcome">
          <h3>Create a New Question</h3>
        </div>
        <div className="form-container">
          <p>Complete the question:</p>
          <h4>Would you rather ...</h4>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="optionOne" placeholder="Enter Option One here" onChange={this.handleChange}></input>
            <h5><span>OR</span></h5>
            <input type="text" name="optionTwo" placeholder="Enter Option Two here" onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)
