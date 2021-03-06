import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ListPetsPage from '../../pets/ListPetsPage'
import RegisterUserPage from '../../users/RegisterUserPage'
import LoginUserPage from '../../users/LoginUserPage'
import LogoutPage from '../../users/LogoutPage'
import AddPetsPage from '../../pets/AddPetsPage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListPetsPage} />
    <Route path='/users/register' component={RegisterUserPage} />
    <Route path='/users/login' component={LoginUserPage} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
    <PrivateRoute path='/pets/add' component={AddPetsPage} />
  </Switch>
)

export default Routes