import React, { Component } from 'react'

import MarketplaceImage from './MarketplaceImage'

export default class MarketplaceItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { subject, body } = this.props
    return (
      <div className="container d-flex mb-3 item-container">
        <div className="col-10 d-flex border p-3 main-product-container">
          <div className="col-3 text-center border-right pl-0 product-avatar">
            <img
              className="rounded-circle"
              src="http://www.designskilz.com/random-users/images/imageM37.jpg"
              alt="Avatar Placeholder"
            />
            <h3>User1234</h3>
          </div>
          <div className="col-7 border-right product-container d-inline-flex flex-column justify-content-between">
            <div className="product-title">
              <h2 className="m-0">{subject}</h2>
            </div>
            <p>{body}</p>
            <button className="btn btn-sm btn-secondary">more</button>
          </div>
          <div className="col-2 pr-0 m-auto">
            <MarketplaceImage src="https://picsum.photos/100/65" />
            <MarketplaceImage src="https://picsum.photos/100/65" />
            <MarketplaceImage src="https://picsum.photos/100/65" />
          </div>
        </div>
        <div className="col-2">
          <div className="mb-3">
            <a href="#" className="btn btn-danger btn-block btn-sm">
              Hide
            </a>
          </div>
          <div>
            <a href="#" className="btn btn-success btn-block btn-sm">
              Pin
            </a>
          </div>
        </div>
      </div>
    )
  }
}
