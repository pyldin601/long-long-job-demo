import React, { Component } from 'react';
import counterJob from './services/counterJob';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    counterJob.on('task', (cursor, counter) => {
      this.setState({ counter })
    });

    counterJob.start(0);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.counter}
        </p>
      </div>
    );
  }
}

export default App;
