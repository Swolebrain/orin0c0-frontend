import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class componentName extends Component {
  render() {
    return (
      <div className="container d-flex">
        <div className="col-3 text-center">
          <img
            className="rounded-circle"
            src="https://api.adorable.io/avatars/200/.png"
            alt="Avatar Placeholder"
          />
          <h3>User1234</h3>
        </div>
        <div className="col-5">
          <h2>RND</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ea quis est, velit repellendus id facere molestias impedit numquam
            fugit.
          </p>
          <button className="btn btn-sm btn-secondary">more</button>
        </div>
        <div className="col-2">
          <img src="https://picsum.photos/100/60" alt="Placeholder Image" />
          <img src="https://picsum.photos/100/50" alt="Placeholder Image" />
          <img src="https://picsum.photos/100/61" alt="Placeholder Image" />
        </div>
        <div className="col-2">
          <div className="mb-3">
            <a href="#" className="btn btn-danger btn-block">
              Hide
            </a>
          </div>
          <div>
            <a href="#" className="btn btn-success btn-block">
              Pin
            </a>
          </div>
        </div>
      </div>
    )
  }
}
