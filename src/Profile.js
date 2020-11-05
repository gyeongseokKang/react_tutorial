import React from 'react';

const date = {
	velopert: {
		name: 'john',
		description: 'who like react'
	},
	gildong: {
		name: 'hong',
		description: 'who is hero'
	},
};

const Profile = ({ match }) => {
	const { username } = match.params;
	const profile = date[username];

	if (!profile) {
		return <div>no user.</div>
	}

	return (
		<div>
			<h3>
				{username}({profile.name})
			</h3>
			<p>{profile.description}</p>
		</div>
	);
};

export default Profile;