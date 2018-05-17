import React, { Component } from 'react'
import Link from 'gatsby-link'

// import NavbarItem from './NavbarItem'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            orin0c0
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/listings/">
                  {' '}
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles/">
                  {' '}
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/podcasts/">
                  {' '}
                  Podcasts
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register/">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login/">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
