import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/books/all' component={Books} />
  </Switch>
)

export default Routes
