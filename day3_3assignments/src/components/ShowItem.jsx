import React from 'react'
import "./ShowItem.css"
function ShowItem({item}) {
    console.log(item)
  return (
    <div className="showitemContainer" >

    <h4>{item.id}</h4>
    <h4>{item.Restarunt_name}</h4>
    <span>{item.dishes_name}</span>
    <h5>{item.rating}</h5>
    <h5>{item.reviews}</h5>
    <h5>{item.votes}</h5>
    <h5>{item.Min_limit_of_order}</h5>
    <h5>{item.payment_methods}</h5>
    <img src={item.image} alt="aa"/>

    </div>
  )
}

export default ShowItem