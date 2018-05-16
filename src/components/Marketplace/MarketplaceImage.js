import React, { Component } from 'react'

export default class MarketplaceImage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { src } = this.props
    return (
      <div>
        <img src={src} className="mb-2" />
      </div>
    )
  }
}
