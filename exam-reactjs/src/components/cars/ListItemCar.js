import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../common/users/Auth'

const ListItemCar = (props) => (
  <div className='car_list_item'>
    <img src={props.car.image} alt='#' />
    <p>{props.car.make}</p>
    <p>{props.car.price}$</p>
    <p>
      { Auth.isUserAuthenticated() ? (
        <Link to={`/car/details/${props.car.id}`}>More Details</Link>
      ) : (
        <span />
      )}
    </p>
  </div>
)

export default ListItemCar