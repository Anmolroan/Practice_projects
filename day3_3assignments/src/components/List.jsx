import React from 'react'
import ShowItem from "./ShowItem";
import "./ShowItem.css"
function List({list}) {
  
  return (
    list.map((item)=>{
     
     return <div><ShowItem key ={item.Restarunt_name} item={item}/></div>
    }))
   
  
}

export default List