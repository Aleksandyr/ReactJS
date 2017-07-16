import React from 'react'

const StatisticsPage = (props) => (
  <div>
    <p>Usres: </p><span>{props.users}</span>
    <p>Cars: </p><span>{props.cars}</span>
  </div>
)

export default StatisticsPage
