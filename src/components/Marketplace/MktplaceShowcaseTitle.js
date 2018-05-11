import React, { Component } from 'react'

export default class MktplaceShowcaseTitle extends Component {
  render() {
    return (
      <a
        className={'nav-item nav-link ' + this.props.status}
        id={'nav-' + this.props.name + '-tab'}
        data-toggle="tab"
        href={'#nav-' + this.props.name}
        role="tab"
        aria-controls={'#nav-' + this.props.name}
        aria-selected="true"
      >
        {this.props.title}
      </a>
    )
  }
}
