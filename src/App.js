import React, { Component } from 'react';
import counterJob from './services/counterJob';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      fib: 0,
    };
  }

  componentDidMount() {
    counterJob.on('task', (cursor, state) => {
      if (state !== undefined) {
        const { fib, n } = state;
        this.setState({ fib, n })
      }
    });

    counterJob.start();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          fib({this.state.n}) = {this.state.fib.toFixed()}
        </p>
      </div>
    );
  }
}

export default App;
