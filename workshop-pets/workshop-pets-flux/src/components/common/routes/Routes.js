import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListPetsPage from '../../pets/ListPetsPage'
import RegisterUserPage from '../../users/RegisterUserPage'
import LoginUserPage from '../../users/LoginUserPage'
import LogoutPage from '../../users/LogoutPage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListPetsPage} />
    <Route path='/users/register' component={RegisterUserPage} />
    <Route path='/users/login' component={LoginUserPage} />
    <Route path='/users/logout' component={LogoutPage} />
  </Switch>
)

export default Routes