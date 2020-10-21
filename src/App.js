import React, { Component } from 'react';
import './App.css';
/*
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
*/
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
class App extends Component {
	state = {
		color: '#000000'
	}

	handleClick = () => {
		this.setState({
			color: getRandomColor()
		});
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>random color</button>
				<LifeCycleSample color={this.state.color} />
			</div>
		)
	}
}
/*
const App = () => {
	return (
		<div>
			<ScrollBox ref={(ref) => console.log(ref, this)}></ScrollBox>
			<button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
		</div>
	)
}*/
//git teet
export default App;
