import React from 'react'
import Link from 'gatsby-link'
import auth from '../components/Auth';

import Showcase from '../components/Showcase'
import Items from '../components/Items'

const IndexPage = () => (
  <div>
      <button onClick={()=>auth.login()}>Log in</button>
      <Showcase />
      <Items />
  </div>
)

export default IndexPage
