import React, { Component } from 'react';
import Remarkable from 'remarkable';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: '*Escribe* algo de **markdown** aqui!'};
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React con Markdown</h2>
        </div>
          <div className="MarkdownEditor">
            <h3>Input</h3>
            <textarea className="texto"
              onChange={this.handleChange}
              defaultValue={this.state.value} />
            <h3>Output</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={this.getRawMarkup()}
            />
          </div>
          <br />
      </div>
    );
  }
}

export default App;
