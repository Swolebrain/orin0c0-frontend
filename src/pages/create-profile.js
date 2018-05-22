import React, { Component } from 'react'
import axios from 'axios'
import { navigateTo } from 'gatsby-link'

import auth from '../components/Auth'

class CreateProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
      firstName: '',
      lastName: '',
      phoneNumber: '',
      favoriteCurrencies: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const token = localStorage.getItem('access_token')
    const profileData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.user.email,
      photoUrl: this.state.user.picture,
      username: this.state.user.nickname,
      auth0Id: this.state.user.sub,
      phoneNumber: this.state.phoneNumber,
      favoriteCurrencies: this.state.favoriteCurrencies,
    }
    // console.log(profileData)

    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/users',
      headers: { Authorization: `Bearer ${token}` },
      data: profileData,
    }).then(res => {
      console.log(res.data)
      navigateTo('/dashboard')
    })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const { user } = this.state
    // console.log(user)

    return (
      <div className="container col-8">
        <h1 className="text-center">Create Profile</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={user.email}
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              disabled
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={user.nickname}
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              disabled
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Favorite Cryptocurrencies"
              name="favoriteCurrencies"
              value={this.state.favoriteCurrencies}
              onChange={this.onChange}
            />
            <small>Please use comma seperated values. eg. BTC,ETH,LTC</small>
          </div>

          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default CreateProfilePage
