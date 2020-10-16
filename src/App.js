import React from 'react';
import './App.css';

function App() {
	const name = '리액트';
	const style = {
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: '48px',
		fontWeight: 'bold',
		padding: 16
	}
	return <>
		{/*주석 작성 방법~!~!~!~!*/}
		<div style={style}>{name}</div>
		<div className="react">잘 동작합니까?</div>
	</>
}

export default App;
