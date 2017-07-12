import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListPetsPage from '../pets/ListPetsPage'
import RegisterUserPage from '../users/RegisterUserPage'
import LoginUserPage from '../users/LoginUserPage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListPetsPage} />
    <Route path='/users/register' exact component={RegisterUserPage} />
    <Route path='/users/login' exact component={LoginUserPage} />
  </Switch>
)

export default Routes