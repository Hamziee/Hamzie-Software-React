import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Test from './views/test'
import CloudCraft from './views/cloud-craft'
import Aboutme from './views/aboutme'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Test} path="/test" />
        <Route exact component={CloudCraft} path="/cloud-craft" />
        <Route exact component={Aboutme} path="/aboutme" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
