import React, { Component } from 'react'
import Link from 'gatsby-link'

import NavbarItem from './NavbarItem'

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
              <NavbarItem to="/listings/" name="Marketplace" />
              <NavbarItem to="/articles/" name="Articles" />
              <NavbarItem to="/podcasts/" name="Podcast" />
            </ul>

            <ul className="navbar-nav ml-auto">
              <NavbarItem to="#" name="Register" />
              <NavbarItem to="#" name="Sign In" />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
