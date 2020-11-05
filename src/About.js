import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true
	});

	const showDetail = query.detail === 'true';
	return (
		<div>
			<h1>소개</h1>
			<p>라우터 기초 프로젝트</p>
			{showDetail && <p>detail value is true!</p>}
		</div>
	)
}

export default About;