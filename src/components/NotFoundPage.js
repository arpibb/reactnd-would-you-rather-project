import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

class NotFoundPage extends Component{
  render(){
    return(
      <div>
        Page Not found. Sorry.
      </div>
    )
  }
}

export default NotFoundPage