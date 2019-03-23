import React, { Component } from 'react';
import './App.css';

class Home extends Component {
	constructor(props){
		super(props);
	}
	handleClick(e, vote) {
	    e.preventDefault();
	    console.log(vote);
	}
	render(){
		return (
			<div className="App-home">
				<h3>Topic List</h3>
				<div className="App-topic">
					<div className="App-vote-box">
						<a href="#" onClick={(e) => this.handleClick(e, "up")}>▲</a>
						<span>8</span>
						<a href="#" onClick={(e) => this.handleClick(e, "down")}><span>▼</span></a>
					</div>	
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
				</div>
				<div className="App-topic">
					<div className="App-vote-box">
						<a href="#" onClick={(e) => this.handleClick(e, "up")}>▲</a>
						<span>8</span>
						<a href="#" onClick={(e) => this.handleClick(e, "down")}><span>▼</span></a>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
				</div>
			</div>
		);
	}
}

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			topics: [
				{
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
					vote: 0
				}
			]
		}
	}
  	render() {
		return (
	  		<div>
	  			<header className="App-header">
	  				<h1>Digg/Reddit Clone</h1>
	  				<nav></nav>
	  			</header>
	  			<Home/>
		  	</div>
		);
  	}
}

export default App;
