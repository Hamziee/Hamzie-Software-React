import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './coming-soon.css'

const ComingSoon = (props) => {
  return (
    <div className="coming-soon-container">
      <Helmet>
        <title>ComingSoon - Hamzie Software</title>
        <meta property="og:title" content="ComingSoon - Hamzie Software" />
      </Helmet>
      <Header></Header>
      <div className="coming-soon-container1">
        <h1 className="coming-soon-text headingOne">
          CloudCraft is coming soon.
        </h1>
        <p className="coming-soon-text1 lead">
          <span className="coming-soon-text2">EST: July 17th 2022</span>
        </p>
      </div>
      <footer className="coming-soon-footer">
        <span className="coming-soon-text3">
          © 2022 Hamzie Systems, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default ComingSoon
