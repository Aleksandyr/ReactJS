import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import RegisterUserPage from '../../users/RegisterUserPage'
import LoginUserPage from '../../users/LoginUserPage'
import LogoutPage from '../../users/LogoutPage'
import HomePage from '../../home/HomePage'
import CreateCarPage from '../../cars/CreateCarPage'
import ListCarPage from '../../cars/ListCarPage'
import CarDetailsPage from '../../cars/CarDetailsPage'
import ProfilePage from '../../users/ProfilePage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} /> 
    <Route path='/users/register' component={RegisterUserPage} />
    <Route path='/users/login' component={LoginUserPage} />
    <Route path='/cars/all' exact component={ListCarPage} /> 
    <PrivateRoute path='/users/logout' component={LogoutPage} />
    <PrivateRoute path='/cars/create' component={CreateCarPage} />
    <PrivateRoute path='/cars/create' component={CreateCarPage} />
    <PrivateRoute path='/car/details/:id' component={CarDetailsPage} />
    <PrivateRoute path='/cars/myprofile' component={ProfilePage} />
  </Switch>
)

export default Routes