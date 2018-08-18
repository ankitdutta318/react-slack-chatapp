import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit'

class ChatScreen extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {}
    }
  }
  
  componentDidMount () {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:9f3457c9-294a-46e0-9993-903195ceca93',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
      }),
    })

  chatManager
    .connect()
    .then(currentUser => {
      console.log('Current User: ', currentUser)
      this.setState({ currentUser })
    })
    .catch(error => console.error('error', error))
}
    

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