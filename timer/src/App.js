import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: Date.now()
    };
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
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

export default App;
