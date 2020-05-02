import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import '../styles/App.scss'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
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
      optionTwo: ''
    }))
  }

  render(){
    return(
      <div>
        <div>
          <h3>Create a New Question</h3>
        </div>
        <div>
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
