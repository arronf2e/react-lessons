import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import FileList from './FileList';
import Count from './Count';
import ThemeContextApp from './ThemeContext'
import UseRef from './UseRef'
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
        <ThemeContextApp />
        <UseRef />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
