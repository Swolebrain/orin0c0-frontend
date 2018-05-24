import React, { Component } from 'react';
import Link from 'gatsby-link';
import axios from 'axios';

import auth from '../Auth';
import Listings from './Listings';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// user: null,
			errors: null,
			profile: null,
		};
	}

	componentDidMount() {
		this.getUserProfile();
	}

	getUserProfile() {
		const token = auth.getAccessToken();
		const user = auth.getUser();
		const userEmail = user.email;

		axios
			.get(`http://localhost:5000/api/users/${userEmail}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(res => {
				console.log(res.data);
				if (res.data.noprofile) {
					const errors = res.data.noprofile;
					this.setState({
						errors,
					});
				} else {
					const profile = res.data;
					this.setState({
						profile,
					});
				}
			})
			.catch(err => console.log(err));
	}

	render() {
		const { profile, errors } = this.state;

		let profileContent;

		if (errors && profile === null) {
			profileContent = (
				<div>
					<p className="lead text-muted">
						Welcome {this.props.user.nickname}
					</p>
					<p>
						You have not yet setup a profile, please add some info
					</p>
					<Link to="/create-profile" className="btn btn-info">
						Create Profile
					</Link>
				</div>
			);
		} else if (profile) {
			profileContent = (
				<div className="d-flex border pt-5 profile-container">
					<div className="my-profile bg-info text-white">
						<h3>PROFILE</h3>
					</div>
					<div className="col-3 profile-image ">
						<img src={profile.photoUrl} alt={profile.lastName} />
					</div>
					<div className="col-3 pl-0">
						<h3 className="text-uppercase mb-2">
							{profile.firstName}
						</h3>
						<h1 className="text-uppercase"> {profile.lastName} </h1>
					</div>
					<div className="col-3 text-right font-weight-bold profile-info pl-0">
						<p> Name </p>
						<p> Username </p>
						<p> Followed Users </p>
						<p> Pinned Listings </p>
						<p> Favorite Cyrptocurrencies </p>
					</div>
					<div className="col-3 profile-info pl-0">
						<p>
							{profile.firstName} {profile.lastName}
						</p>
						<p> {profile.username} </p>
						<p> {profile.followedUsers.length} </p>
						<p> {profile.pinnedListings.length} </p>
						<ul className="list-inline ml-0 mb-2">
							{profile.favoriteCurrencies.map(currency => (
								<li key={currency} className="list-inline-item">
									{currency}
								</li>
							))}
						</ul>
					</div>
				</div>
			);
		}

		return (
			<div className="container">
				{profileContent}
				{/* <Listings profile={profile} /> */}
			</div>
		);
	}
}

export default Profile;
