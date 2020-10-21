import React, { Component } from 'react';
import './App.css';
/*
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
*/
import IterationSample from './IterationSample';

class App extends Component {
	render() {
		return (
			<IterationSample />
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
