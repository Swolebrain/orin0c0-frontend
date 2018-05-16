import React, { Component } from 'react'
// import React from 'react'
import Link from 'gatsby-link'
import TestDynamicComponent from '../components/TestDynamicComponent'
import MarketplaceShowcase from '../components/Marketplace/MarketplaceShowcase'
import Marketplace from '../components/Marketplace/Marketplace'

export default class ListingsPage extends Component {
  state = {
    listings: [],
  }
  render() {
    return (
      <div>
        <MarketplaceShowcase />
        <Marketplace />
      </div>
    )
  }
}
