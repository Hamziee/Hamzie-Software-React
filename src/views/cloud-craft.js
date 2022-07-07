import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './cloud-craft.css'

const CloudCraft = (props) => {
  return (
    <div className="cloud-craft-container">
      <Helmet>
        <title>CloudCraft - Hamzie Software</title>
        <meta property="og:title" content="CloudCraft - Hamzie Software" />
      </Helmet>
      <Header></Header>
      <div className="cloud-craft-container1">
        <h1 className="cloud-craft-text headingOne">
          CloudCraft is coming soon.
        </h1>
        <p className="cloud-craft-text1 lead">
          <span className="cloud-craft-text2">EST: July 17th 2022</span>
        </p>
      </div>
      <footer className="cloud-craft-footer">
        <span className="cloud-craft-text3">
          © 2022 Hamzie Systems, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default CloudCraft
