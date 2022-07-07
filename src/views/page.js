import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Hamzie Software</title>
        <meta property="og:title" content="Page - Hamzie Software" />
      </Helmet>
    </div>
  )
}

export default Page
