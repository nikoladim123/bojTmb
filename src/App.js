import React, { Component } from 'react';
import MyHeader from './assets/components/MyHeader.js'
import MyFooter from './assets/components/MyFooter.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <MyFooter></MyFooter>
      </div>
    );
  }
}
export default App;
