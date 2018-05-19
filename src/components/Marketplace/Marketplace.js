import React, { Component } from 'react'
import axios from 'axios'
import Link from 'gatsby-link'

import MarketplaceItem from './MarketplaceItem'

export default class Marketplace extends Component {
  state = { listings: [] }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios
      .get('http://localhost:5000/api/listings')
      .then(res => {
        const listings = res.data
        this.setState({ listings })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { listings } = this.state
    return (
      <div>
        {listings.map(listing => {
          const { subject, body, images } = listing
          // console.log(images)

          return (
            <MarketplaceItem
              key={subject}
              subject={subject.toUpperCase().substr(0, 4)}
              body={body.substr(0, 150) + ' ...'}
              images={images}
            />
          )
        })}
      </div>
    )
  }
}
