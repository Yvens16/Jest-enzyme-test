import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      properties:[],
    };
  }
  
  render() {
    
    const color = {
      color:'red'
    };
    const {counter} = this.state;
    return (
      <div data-test="component-app">
      <div id="hello"></div>
      <div className="bye"></div>
      <div data-test="salut"></div>
      {
        counter >= 0 ?
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        :
        <div className="set">
        <h1 data-test="counter-display">The counter is currently 0 </h1>
        <h2 datat-test="" style={color}>There was an error with the counter</h2>
        </div>
      }
      <button 
      data-test="increment-button"
      onClick={() => this.setState({ counter: counter + 1})}
      >
      Increment Counter</button>
      <button 
      onClick={() => {this.setState({counter: counter -1})}}
      data-test=""
      >
      Decrement Counter</button>
      </div>
    );
  }
}

export default App;
