import React, { Component } from 'react';
import axios from 'axios';

import auth from '../components/Auth';
import Profile from '../components/Dashboard/Profile';

class DashboardPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
		};
	}

	async componentDidMount() {
		const token = auth.getAccessToken();
		const user = auth.getUser();
		const userEmail = user.email;

		const {data: userProfile} = await axios.get(
			`http://localhost:5000/api/users/${userEmail}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log('USER PROFILE', userProfile)
		const {data: userListings} = await axios
			.get(
				`http://localhost:5000/api/listings/user/${userProfile._id}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

		console.log(userListings);

        // axios.get(
         //    `http://localhost:5000/api/users/${userEmail}`,
         //    {
         //        headers: {
         //            Authorization: `Bearer ${token}`,
         //        },
         //    }
        // ).then(userProfile => {
        	// this.setState({})
        	// return axios
         //        .get(
         //            `http://localhost:5000/api/listings/user/${userProfile._id}`,
         //            {
         //                headers: {
         //                    Authorization: `Bearer ${token}`,
         //                },
         //            }
         //        );
		// })
		// .then(listings => {
        //
        //
		// });
	}

	render() {
		const { user } = this.state;

		return (
			<div className="container">
				<h1> Dashboard </h1>
				<Profile user={this.state.user} />
			</div>
		);
	}
}

export default DashboardPage;
