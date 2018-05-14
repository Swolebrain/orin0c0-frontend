import React, { Component } from 'react'
import Link from 'gatsby-link'

class Items extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="title text-center">Top Cryptocurrency Chart</h3>

            <div
              className="coinmarketcap-currency-widget mb-3"
              data-currencyid="1"
              data-base="USD"
              data-secondary=""
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-stats="USD"
              data-statsticker="false"
            />
            <div
              className="coinmarketcap-currency-widget mb-3"
              data-currencyid="1027"
              data-base="USD"
              data-secondary=""
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-stats="USD"
              data-statsticker="false"
            />
            <div
              className="coinmarketcap-currency-widget"
              data-currencyid="52"
              data-base="USD"
              data-secondary=""
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-stats="USD"
              data-statsticker="false"
            />
          </div>
          <div className="col">
            <h3 className="title text-center">Hot Items</h3>
            <ul className="list-group mb-3">
              <li className="list-group-item mb-3">Hot Item 1</li>
              <li className="list-group-item mb-3">Hot Item 2</li>
              <li className="list-group-item mb-3">Hot Item 3</li>
              <li className="list-group-item mb-3">Hot Item 4</li>
              <li className="list-group-item mb-3">Hot Item 5</li>
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
