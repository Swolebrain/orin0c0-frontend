import React, { Component } from 'react'
import axios from 'axios'

import auth from '../components/Auth'
import Profile from '../components/Dashboard/Profile'

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Profile />
      </div>
    )
  }
}

export default DashboardPage
