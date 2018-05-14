import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class componentName extends Component {
  render() {
    return (
      <div className="container d-flex mb-3">
        <div className="col-10 d-flex border p-3 main-product-container">
          <div className="col-3 text-center border-right pl-0 product-avatar">
            <img
              className="rounded-circle"
              src="http://www.designskilz.com/random-users/images/imageM37.jpg"
              alt="Avatar Placeholder"
            />
            <h3>User1234</h3>
          </div>
          <div className="col-7 border-right product-container">
            <div className="product-title">
              <h2 className="m-0">RND</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              ea quis est, velit repellendus id facere molestias impedit numquam
              fugit.
            </p>
            <button className="btn btn-sm btn-secondary">more</button>
          </div>
          <div className="col-2 pr-0 m-auto">
            <img
              src="https://picsum.photos/100/65"
              alt="Placeholder Image"
              className="mb-2"
            />
            <img
              src="https://picsum.photos/100/65"
              alt="Placeholder Image"
              className="mb-2"
            />
            <img
              src="https://picsum.photos/100/65"
              alt="Placeholder Image"
              className="mb-2"
            />
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
