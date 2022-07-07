import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import ComingSoon from './views/coming-soon'
import Aboutus from './views/aboutus'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/page" />
        <Route exact component={ComingSoon} path="/coming-soon" />
        <Route exact component={Aboutus} path="/aboutus" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
