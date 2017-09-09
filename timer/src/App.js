import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: Date.now()
    };
  }

  componentDidMount = () => {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  tick = () => {
    let date = new Date();
    this.setState({
      date: date.toString()
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.date}</h2>
        </div>
      </div>
    );
  }
}

export default Timer;
