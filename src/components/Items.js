import React, { Component } from 'react'
import Link from 'gatsby-link'

class Items extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="title text-center">Top Cryptocurrency Chart</h3>

            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link"
                  id="nav-bitcoin-tab"
                  data-toggle="tab"
                  href="#nav-bitcoin"
                  role="tab"
                  aria-controls="nav-bitcoin"
                  aria-selected="true"
                >
                  Bitcoin
                </a>
                <a
                  className="nav-item nav-link active"
                  id="nav-ethereum-tab"
                  data-toggle="tab"
                  href="#nav-ethereum"
                  role="tab"
                  aria-controls="nav-ethereum"
                  aria-selected="false"
                >
                  Ethereum
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-litecoin-tab"
                  data-toggle="tab"
                  href="#nav-litecoin"
                  role="tab"
                  aria-controls="nav-litecoin"
                  aria-selected="false"
                >
                  Litecoin
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show"
                id="nav-bitcoin"
                role="tabpanel"
                aria-labelledby="nav-bitcoin-tab"
              >
                Bitcoin Info goes here
              </div>
              <div
                className="tab-pane fade active"
                id="nav-ethereum"
                role="tabpanel"
                aria-labelledby="nav-ethereum-tab"
              >
                Ethereum Info goes here
              </div>
              <div
                className="tab-pane fade"
                id="nav-litecoin"
                role="tabpanel"
                aria-labelledby="nav-litecoin-tab"
              >
                Litecoin Info goes here
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="title text-center">Hot Items</h3>
            <ul className="list-group mb-3">
              <li className="list-group-item">Hot Item 1</li>
              <li className="list-group-item">Hot Item 2</li>
              <li className="list-group-item">Hot Item 3</li>
              <li className="list-group-item">Hot Item 4</li>
              <li className="list-group-item">Hot Item 5</li>
            </ul>
            <Link to="#" className="btn btn-sm btn-primary float-right">
              more
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Items
