import React, { Component } from 'react'

class ChatScreen extends Component {  
  render() {
    return (
      <div>
        <h1>Chat</h1>
        <p>Hello, {this.props.currentUsername}</p>
      </div>
    )
  }
}

export default ChatScreen