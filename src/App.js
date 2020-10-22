import React, { Component } from 'react';
import './App.css';

import Info from './Info';

/*
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
*/
const App = () => {
	return (
		<div>
			<Info />
		</div>
	)
}

export default App;
