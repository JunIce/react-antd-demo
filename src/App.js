import React, { Component } from 'react';
import './App.css';
// import Home from './home'
import Banner from './home/banner'


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
        <Banner />
      </div>
    );
  }
}

export default App;
