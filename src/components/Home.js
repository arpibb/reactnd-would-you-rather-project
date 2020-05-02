import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

class Home extends Component{
  render(){
    return(
      <div>This is the Homepage</div>
    )
  }
}

export default connect()(Home)