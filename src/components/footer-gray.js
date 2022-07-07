import React from 'react'

import './footer-gray.css'

const FooterGray = (props) => {
  return (
    <footer className="footer-gray-footer">
      <div className="footer-gray-divider"></div>
      <div className="footer-gray-container">
        <div className="footer-gray-container1">
          <div className="footer-gray-container2">
            <span className="footer-gray-text">
              <span>Hamzie Software</span>
              <br></br>
              <span></span>
            </span>
          </div>
          <div className="footer-gray-container3"></div>
        </div>
        <span className="footer-gray-text4 small">
          <span>
            All rights reserved. Copyright © 2021 Soft UI Design System by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="footer-gray-text6">Creative Tim</span>
          <span>.</span>
        </span>
      </div>
    </footer>
  )
}

export default FooterGray
