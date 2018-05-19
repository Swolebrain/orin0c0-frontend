import React, { Component } from 'react'

import auth from '../Auth/index'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
    }
  }
  componentDidMount() {
    this.fetchProfile()
  }

  fetchProfile = () => {
    if (auth.isAuthenticated()) {
      const user = auth.getUser()

      this.setState({ user })
    }
  }

  render() {
    const { user } = this.state
    return <div className="container">{console.log(user)}</div>
  }
}

export default Profile
