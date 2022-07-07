import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import ComingSoon from './views/coming-soon'
import Aboutus from './views/aboutus'
import Home from './views/home'
import Page1 from './views/page1'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/page" />
        <Route exact component={ComingSoon} path="/coming-soon" />
        <Route exact component={Aboutus} path="/aboutus" />
        <Route exact component={Home} path="/" />
        <Route exact component={Page1} path="/page1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
