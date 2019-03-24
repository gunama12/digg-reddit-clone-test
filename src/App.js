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
			<div>
				<h3>Topic List</h3>
				{
					this.props.topics.map((item,index) => 						
						<div className="App-topic" key={index}>
							<div className="App-vote-box">
								<a href="#" onClick={(e) => this.handleVote(e, "up", index)}>▲</a>
								<span>{item.vote}</span>
								<a href="#" onClick={(e) => this.handleVote(e, "down", index)}><span>▼</span></a>
							</div>	
							<div className="App-content-box">
								<p>{item.content}</p>
							</div>
						</div>
					)
				}
			</div>
		);
	}
}

class TopicCreate extends Component {
	constructor(props){
		super(props);
		this.state = {
			content: "",
			error: false
		}
	}
	handleContentChange = (event) => {
		this.setState({content: event.target.value});
		if(event.target.value.length < 256 && this.state.error == true){
			this.setState({error: false});
		}
	}
	handleSubmit = (event) => {
	    event.preventDefault();
	    if(this.state.content.length > 255 ){
			this.setState({error: true});
		}else{
			console.log("Validation success");
		}
	}
 	render(){
 		return (
 			<div>
				<h3>Create Topic</h3>
 				<form onSubmit={this.handleSubmit}>
 					<div className="App-form-group">
	 					<label>
				        	Content:
				        </label>
				        <textarea value={this.state.content} onChange={this.handleContentChange}/>
				        { this.state.error && 
				        	<span className="App-error-msg">The content may not be greater than 255 characters</span>
				        }
				        <input type="submit" value="Submit"/>
			        </div>
 				</form>
 			</div>
 		)
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
		let topics = this.state.topics;
		topics[index].vote = vote === "up" ? (topics[index].vote + 1) : (topics[index].vote - 1);  
		this.setState({
			topics: topics
		})
	}
  	render() {
		return (
	  		<div className="App">
	  			<header className="App-header">
	  				<h1>Digg/Reddit Clone</h1>
	  				<nav></nav>
	  			</header>
	  			<Home topics={this.state.topics} onVote={this.handleVote}/>
	  			<TopicCreate/>
		  	</div>
		);
  	}
}

export default App;
