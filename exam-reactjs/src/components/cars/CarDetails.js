import React from 'react'

const CarDetails = (props) => (
  <div>
    <img src={props.car.image} alt='#' />
    <p>Make: {props.car.make}</p>
    <p>Model: {props.car.model}</p>
    <p>Year: {props.car.year}</p>
    <p>Engine: {props.car.engine}</p>
    <p>Price: {props.car.price}</p>
    <p>Milage: {props.car.mileage}</p>
  </div>
)

export default CarDetails