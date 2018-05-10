import React, { Component } from 'react'
import Link from 'gatsby-link'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top mb-5">
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
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles/">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/podcasts/">
                  Podcasts
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
