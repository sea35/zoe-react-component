import React from 'react'
import { Router, Route ,hashHistory} from 'react-router'
import {
  App
} from './routes'

export default function () {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
      </Route>
    </Router>
  )
}
