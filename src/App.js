import React, { Component } from 'react';
import './App.css';

class Home extends Component {
	constructor(props){
		super(props);
	}
	handleVote(e, vote, index) {
	    e.preventDefault();
	    this.props.onVote(vote, index);
	}
	render(){
		return (
			<div className="App-home">
				<h3>Topic List</h3>
				{
					this.props.topics.map((item,index) => 						
						<div className="App-topic" key={index}>
							<div className="App-vote-box">
								<a href="#" onClick={(e) => this.handleVote(e, "up", index)}>▲</a>
								<span>{item.vote}</span>
								<a href="#" onClick={(e) => this.handleVote(e, "down", index)}><span>▼</span></a>
							</div>	
							<div className="App-topic-box">
								<p>{item.content}</p>
							</div>
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
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
					vote: 0
				},
				{
					content: "in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
					vote: 5
				}
			]
		}
	}
	handleVote = (vote, index) =>{
		console.log(vote, index);
	}
  	render() {
		return (
	  		<div>
	  			<header className="App-header">
	  				<h1>Digg/Reddit Clone</h1>
	  				<nav></nav>
	  			</header>
	  			<Home topics={this.state.topics} onVote={this.handleVote}/>
		  	</div>
		);
  	}
}

export default App;
