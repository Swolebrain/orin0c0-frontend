import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class MktplaceShowcaseBody extends Component {
  render() {
    return (
      <div
        className={'tab-pane fade show ' + this.props.status}
        id={'nav-' + this.props.name}
        role="tabpanel"
        aria-labelledby={'nav-' + this.props.name + '-tab'}
      >
        {this.props.body}
        <Link to="#" className="btn btn-sm btn-block btn-secondary mt-2">
          more
        </Link>
      </div>
    )
  }
}
