import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class componentName extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={this.props.to}>
          {this.props.name}
        </Link>
      </li>
    )
  }
}
