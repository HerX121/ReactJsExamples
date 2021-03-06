import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
	super(props);
	this.state = { name : ""}
	this.onChange = this.onChange.bind(this);
  }
  onChange(event){
	this.setState({name: event.target.value});	 
  }
  render() {
	return (
	  <div className="App">
		<div className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h2>Welcome to React</h2>
		</div>
		<div className="App-intro">
		<br />
			<form>
			 <label>Nombre: </label>
			  <input type="text" value={this.state.name} onChange={this.onChange} />
			</form>
			<div>Hello {this.state.name}</div>
		</div>
	  </div>
	);
  }
}

export default App;
