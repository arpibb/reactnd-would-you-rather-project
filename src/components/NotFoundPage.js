import React, { Component } from 'react'
import '../styles/App.scss'

class NotFoundPage extends Component{
  goToLogin =()=>{
    this.props.history.push("/")
  }
  render(){
    return(
      <div>
       <p> Ooops, seems like there is nothing to see here. Please go back and login.</p>
       <button onClick={this.goToLogin}>Back To Login</button>
      </div>
    )
  }
}

export default NotFoundPage