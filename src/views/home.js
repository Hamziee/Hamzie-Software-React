import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hamzie Software</title>
        <meta property="og:title" content="Hamzie Software" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container1">
          <div className="home-card">
            <h1 className="home-text headingOne">CloudCraft.</h1>
            <h1 className="home-text1 headingOne">
              SMP For Java &amp; Bedrock
            </h1>
            <span className="home-text2 lead">
              <span>
                We have a nice set-up server that everyone is welcome in,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                and we try to build up a nice community which you can be a part
                of!
              </span>
            </span>
            <div className="home-container2">
              <div className="home-container3">
                <Link to="/coming-soon" className="home-navlink">
                  <PrimaryPinkButton
                    button="GO TO CLOUDCRAFT"
                    className="home-component1"
                  ></PrimaryPinkButton>
                </Link>
              </div>
              <OutlineGrayButton
                button="read more"
                rootClassName="outline-gray-button-root-class-name"
              ></OutlineGrayButton>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/ontwerp%20zonder%20titel%20%5B2%5D-1500h.gif"
        className="home-image"
      />
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image1"
        />
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
