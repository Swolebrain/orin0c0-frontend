import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
        <h1>Main Page</h1>
        <Link to="/listings/">Listings</Link>
        <Link to="/articles/">Articles</Link>
        <Link to="/podcasts/">Podcasts</Link>
  </div>
)

export default IndexPage
