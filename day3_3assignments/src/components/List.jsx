import React from 'react'
import ShowItem from "./ShowItem";

import {useState ,useEffect} from 'react';
import data from "../db.json";
function List() {
  const [list,setList]=useState(data.data);
 
  console.log(data)
  return (
    <div className="list-container">

   
   { list.map((item)=>{
     
     return <div><ShowItem key ={item.Restarunt_name} item={item}/></div>
    })}
    </div>
    )
   
  
}

export default List