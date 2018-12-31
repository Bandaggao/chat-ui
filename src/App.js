
import 'react-chat-widget/lib/styles.css';

import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import logo from './logo.svg';

class App extends Component {
  componentDidMount() {
    addResponseMessage("Happy New Year!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Code Ashley"
          subtitle="Your Personal Assistant"
        />
      </div>
    );
  } 
}

export default App;