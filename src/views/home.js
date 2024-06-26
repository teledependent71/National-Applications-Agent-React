import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Applications Agent</title>
        <meta property="og:title" content="National Applications Agent" />
      </Helmet>
    </div>
  )
}

export default Home
