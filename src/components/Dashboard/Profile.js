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
    }

    return (
      <div className="container">
        <div className="row">{profileContent}</div>
      </div>
    )
  }
}

export default Profile
