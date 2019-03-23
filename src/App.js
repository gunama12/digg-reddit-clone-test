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
				{
					this.props.topics.map((item,index) => 						
						<div className="App-topic" key={index}>
							<div className="App-vote-box">
								<a href="#" onClick={(e) => this.handleClick(e, "up")}>▲</a>
								<span>{item.vote}</span>
								<a href="#" onClick={(e) => this.handleClick(e, "down")}><span>▼</span></a>
							</div>	
							<p>{item.content}</p>
						</div>
					)
				}
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
					content: "LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
					vote: 0
				},
				{
					content: "LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
					vote: 5
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
	  			<Home topics={this.state.topics}/>
		  	</div>
		);
  	}
}

export default App;
