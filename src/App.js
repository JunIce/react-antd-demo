import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';
import Home from './home'

class App extends Component {

    state = {
      loading: false
    }
  

  enterLoading = () => {
    this.setState({loading: true})
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
