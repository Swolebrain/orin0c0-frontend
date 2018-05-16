import React, { Component } from 'react'
import Link from 'gatsby-link'

import MarketplaceItem from './MarketplaceItem'

export default class Marketplace extends Component {
  state = { listings: [] }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:5000/api/listings')
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(listing => ({
          subject: `${listing.subject}`,
          body: `${listing.body}`,
          images: `${listing.images}`,
        }))
      )
      .then(listings =>
        this.setState({
          listings,
        })
      )
      .catch(error => console.log(error))
  }

  render() {
    const { listings } = this.state
    return (
      <div>
        {listings.map(listing => {
          const { subject, body, images } = listing
          return (
            <MarketplaceItem
              key={subject}
              subject={subject.toUpperCase().substr(0, 3)}
              body={body.substr(0, 100)}
            />
          )
        })}
      </div>
    )
  }
}
