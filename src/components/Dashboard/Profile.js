import React, { Component } from 'react'
import Link from 'gatsby-link'
import axios from 'axios'

import auth from '../Auth'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // user: null,
      errors: null,
      profile: null,
    }
  }

  componentDidMount() {
    this.getUserProfile()
  }

  getUserProfile() {
    const token = localStorage.getItem('access_token')
    let user = JSON.parse(localStorage.getItem('user'))
    const userEmail = user.email
    // console.log(token)
    console.log(userEmail)

    axios
      .get(`http://localhost:5000/api/users/${userEmail}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        console.log(res.data)
        if (res.data.noprofile) {
          const errors = res.data.noprofile
          this.setState({ errors })
        } else {
          const profile = res.data
          this.setState({ profile })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    const { profile, errors } = this.state

    let profileContent

    if (errors && profile === null) {
      profileContent = (
        <div>
          <p className="lead text-muted">Welcome {this.props.user.nickname}</p>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-info">
            Create Profile
          </Link>
        </div>
      )
    } else if (profile) {
      profileContent = (
        <div>
          <h1>Dashboard</h1>
          <div className="d-flex">
            <div className="col-2">
              <img src={profile.photoUrl} alt={profile.lastName} />
            </div>
            <div className="col-4">
              <h3 className="text-uppercase mb-2">{profile.firstName}</h3>
              <h1 className="text-uppercase">{profile.lastName}</h1>
            </div>
            <div className="col-4 text-right font-weight-bold">
              <p>Name</p>
              <p>Username</p>
              <p>Followed Users</p>
              <p>Pinned Listings</p>
              <p>Favorite Cyrptocurrencies</p>
            </div>
            <div className="col-4">
              <p>
                {profile.firstName} {profile.lastName}
              </p>
              <p>{profile.username}</p>
              <p>{profile.followedUsers.length}</p>
              <p>{profile.pinnedListings.length}</p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="">{profileContent}</div>
      </div>
    )
  }
}

export default Profile
