import React, { Component } from 'react'
import axios from 'axios'

import auth from '../components/Auth'
import Profile from '../components/Dashboard/Profile'

class DashboardPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
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
    const { user } = this.state
    // console.log(user)

    return (
      <div className="container">
        <Profile user={this.state.user} />
      </div>
    )
  }
}

export default DashboardPage
