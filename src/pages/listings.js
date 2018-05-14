import React from 'react'
import Link from 'gatsby-link'
import TestDynamicComponent from '../components/TestDynamicComponent'
import MarketplaceShowcase from '../components/Marketplace/MarketplaceShowcase'
import Marketplace from '../components/Marketplace/Marketplace'

const ListingsPage = () => (
  <div>
    <MarketplaceShowcase />
    <Marketplace />
  </div>
)

export default ListingsPage
