import React, { Component } from 'react';
import axios from 'axios';

import auth from '../Auth';

class Listings extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { profile } = this.props;

		console.log(profile._id);

		return (
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}

export default Listings;
