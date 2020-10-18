import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
	render() {
		const { name, favoriteNumber, children } = this.props;
		return (<div>
			hi. my name is {name}, <br></br>
			my favoriteNumber is {favoriteNumber}, <br></br>
			my text is {children}
		</div>)
	}
}

/*
함수형 컴포넌트
const MyComponent = props => {
	const { name, children, favoriteNumber } = props;
	return <div> 안녕하세요. 이름은 {name}, {children}, {favoriteNumber} 입니다</div>
}
*/
MyComponent.defaultProps = {
	name: '3'
}

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;

