import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Page1 from './views/page1'
import CloudCraft from './views/cloud-craft'
import Aboutme from './views/aboutme'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/page" />
        <Route exact component={Page1} path="/page1" />
        <Route exact component={CloudCraft} path="/cloud-craft" />
        <Route exact component={Aboutme} path="/aboutme" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
