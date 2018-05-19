import React, { Component } from 'react'

import auth from '../Auth'

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

  fetchProfile() {
    this.setState({
      user: auth.getUser(),
    })
  }

  render() {
    // const { user } = this.state
    return <div className="container">{/* {console.log(this.user)} */}</div>
  }
}

export default Profile
