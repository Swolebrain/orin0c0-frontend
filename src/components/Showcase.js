import React from 'react'

const Showcase = () => {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid pt-3">
        <p className="h2 mb-2">
          Buy and Sell Crypto related items, <br />
          and learn a thing or two about digital currencies
        </p>
        <hr className="my-4" />
        <p className="lead">How it works:</p>

        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <div className="card-text">Anyone can list an item for free</div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-text">
                Anyone can view and browse all items in the marketplace
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-text">
                Register to contact seller or contact them anonymously on our
                platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
