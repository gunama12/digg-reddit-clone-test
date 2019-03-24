import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class Home extends Component {
	constructor(props){
		super(props);
	}
	handleVote(e, vote, index) {
	    e.preventDefault();
	    this.props.onVote(vote, index);
	}
	render(){
		this.props.topics.sort(function (a, b) {
			return b.vote - a.vote;
		});
		let slicedTopics = this.props.topics.slice(0, 20);
		return (
			<div>
				<h3>Topic List</h3>
				{
					slicedTopics.map((item,index) => 						
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
		if(event.target.value.length < 256 && this.state.error === true){
			this.setState({error: false});
		}
	}
	handleSubmit = (event) => {
	    event.preventDefault();
	    if(this.state.content.length > 255 ){
			this.setState({error: true});
		}else{
			this.props.onSuccess(this.state.content);
			this.props.history.push('/');
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
					content: "Topic 1",
					vote: 20
				},
				{
					content: "Topic 2",
					vote: 19
				},
				{
					content: "Topic 3",
					vote: 18
				},
				{
					content: "Topic 4",
					vote: 17
				},
				{
					content: "Topic 5",
					vote: 16
				},
				{
					content: "Topic 6",
					vote: 15
				},
				{
					content: "Topic 7",
					vote: 14
				},
				{
					content: "Topic 8",
					vote: 13
				},
				{
					content: "Topic 9",
					vote: 12
				},
				{
					content: "Topic 10",
					vote: 11
				},
				{
					content: "Topic 11",
					vote: 10
				},
				{
					content: "Topic 12",
					vote: 9
				},
				{
					content: "Topic 13",
					vote: 8
				},
				{
					content: "Topic 14",
					vote: 7
				},
				{
					content: "Topic 15",
					vote: 6
				},
				{
					content: "Topic 16",
					vote: 5
				},
				{
					content: "Topic 17",
					vote: 5
				},
				{
					content: "Topic 18",
					vote: 4
				}
			]
		}
	}
	handleVote = (vote, index) => {
		let topics = this.state.topics;
		topics[index].vote = vote === "up" ? (topics[index].vote + 1) : (topics[index].vote - 1);  
		this.setState({
			topics: topics
		})
	}
	handleCreateTopicSuccess = (content) => {
		let newContent = {
			content: content,
			vote: 0
		};
		this.setState({
	    	topics: [...this.state.topics, newContent]
	    });
	}
  	render() {
		return (

      <BrowserRouter>
	  		<div className="App">
	  			<header className="App-header">
	  				<h1>Digg/Reddit Clone</h1>
	  				<nav>
			            <li><Link to='/'>Home</Link></li>
			            <li><Link to='/create'>Create Topic</Link></li>           
			        </nav>
	  			</header>
	  			<main>
	  				<Switch>
	  					<Route 
	  						path="/" 
	  						exact 
	  						component={() => <Home topics={this.state.topics} onVote={this.handleVote}/>}
	  					/>
						<Route 
							path="/create" 
							exact 
							render={({ history }) => (
								<TopicCreate onSuccess={this.handleCreateTopicSuccess} history={history}/>
							)}
						/>
			  		</Switch>
	  			</main>
		  	</div>

      </BrowserRouter>
		);
  	}
}

export default App;
