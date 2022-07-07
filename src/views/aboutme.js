import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import './aboutme.css'

const Aboutme = (props) => {
  return (
    <div className="aboutme-container">
      <Helmet>
        <title>About me - Hamzie Software</title>
        <meta property="og:title" content="About me - Hamzie Software" />
      </Helmet>
      <HeaderFull></HeaderFull>
      <div className="aboutme-profile">
        <img
          alt="image"
          src="/playground_assets/image_2022-07-07_223123990-200h.png"
          className="aboutme-image"
        />
        <div className="aboutme-container01">
          <div className="aboutme-container02">
            <h4 className="aboutme-text">Hamza</h4>
            <OutlineBlueButton button="follow"></OutlineBlueButton>
          </div>
          <div className="aboutme-container03">
            <span className="aboutme-text01">
              <span className="aboutme-text02">323</span>
              <span> Posts</span>
            </span>
            <span className="aboutme-text04">
              <span className="aboutme-text05">3.5k</span>
              <span> Followers</span>
            </span>
            <span>
              <span className="aboutme-text08">260</span>
              <span> Following</span>
            </span>
          </div>
          <span className="medium">
            Hey I&apos;m Hamza! I&apos;m a developer in different applications,
            games, discord bots. I also am Head IT Management of L&amp;M.
            I&apos;ve been a computer guy since I was young. And want to work on
            cool and fun projects!
          </span>
          <NextButton button="More about me"></NextButton>
        </div>
      </div>
      <div className="aboutme-contact">
        <div className="aboutme-container04">
          <div className="aboutme-form">
            <h2 className="aboutme-text11 headingOne">
              <span>Say Hi!</span>
            </h2>
            <span className="aboutme-text13 lead">
              We&apos;d like to talk with you.
            </span>
            <form className="aboutme-form1">
              <label className="aboutme-text14 label">My name is</label>
              <input
                type="text"
                placeholder="Full Name"
                className="aboutme-textinput small input"
              />
              <label className="aboutme-text15 label">
                I&apos;m looking for
              </label>
              <input
                type="text"
                placeholder="What you love"
                className="aboutme-textinput1 small input"
              />
              <label className="aboutme-text16 label">Your message</label>
              <textarea
                rows="8"
                placeholder="I want to say that..."
                className="aboutme-textarea textarea small"
              ></textarea>
            </form>
            <div className="aboutme-container05">
              <div className="aboutme-container06">
                <PrimaryBlueButton button="send message"></PrimaryBlueButton>
              </div>
            </div>
          </div>
          <div className="aboutme-info">
            <div className="aboutme-container07">
              <h3 className="headingTwo">
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Information</span>
              </h3>
              <span className="aboutme-text20">
                Fill up the form and I will get back to you within 24 hours.
              </span>
              <div className="aboutme-container08">
                <div className="aboutme-container09">
                  <svg viewBox="0 0 1024 1024" className="aboutme-icon">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:hamzaimzouren@gmail.com?subject="
                    className="aboutme-link small"
                  >
                    hamzaimzouren@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/wave-1.svg"
              className="aboutme-image1"
            />
            <div className="aboutme-container10"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Aboutme
