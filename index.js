import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import FileList from './FileList';
import Count from './Count';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Arron'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Count />
        <br />
        <FileList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
