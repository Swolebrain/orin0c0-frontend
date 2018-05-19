import React, { Component } from 'react'
import Link from 'gatsby-link'
import auth from '../Auth'

// import NavbarItem from './NavbarItem'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false,
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    auth.login()

    this.setState({
      authenticated: auth.isAuthenticated(),
    })
  }

  logout() {
    auth.logout()

    this.setState({
      authenticated: auth.isAuthenticated(),
    })
  }

  componentDidMount() {
    this.setState({
      authenticated: auth.isAuthenticated(),
    })
  }

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
              {!auth.isAuthenticated() && (
                <li className="nav-item">
                  <button onClick={this.login}>Log in</button>
                </li>
              )}
              {auth.isAuthenticated() && (
                <li className="nav-item">
                  <button onClick={this.logout}>
                    {/* <img
                      className="rounded-circle"
                      src={user.picture}
                      alt={user.nickname}
                      style={{ width: '25px', marginRight: '5px' }}
                    /> */}
                    Log out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
