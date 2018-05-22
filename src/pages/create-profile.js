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
    }
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    const { user } = this.state
    console.log(user)

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
                value={this.state.handle}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                value={this.state.handle}
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
              value={this.state.handle}
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
              value={this.state.handle}
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
              value={this.state.handle}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <select className="custom-select" size="4" multiple>
              <option value="BTC">BTC - Bitcoin</option>
              <option value="ETH">ETH - Ethereum</option>
              <option value="LTC">LTC - Litecoin</option>
              <option value="BCH">BCH - Bitcoin Cash</option>
              <option value="EOS">EOS - EOS</option>
              <option value="ADA">ADA - Cardano</option>
              <option value="XLM">XLM - Stellar</option>
              <option value="TRX">TRX - TRON</option>
              <option value="MIOTA">MIOTA - IOTA</option>
            </select>
            <small>Select your favorite cryptocurrencies</small>
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
