import React from "react";
import ShowItem from "./ShowItem";

import { useState, useEffect } from "react";
import data from "../db.json";
function List() {
  const [list, setList] = useState(data.data);

  const sort = (value) => {
    let newdata = data.data
      .filter((el) => el.rating >= value)
      .sort((a, b) => a.rating - b.rating);
    setList(newdata);
    console.log(newdata);
  };
const handleSort =()=>{
  const newList =[];
  list.map((e)=>{
   return newList.push(e)
  })
  newList.sort((a,b)=>{return a.cost_for_two-b.cost_for_two});
console.log(newList);
  setList(newList)
}
  return (
    <div>
      <div>
        <div>Sort By star</div>
        <div>
          <button onClick={() => sort(1)}>*</button>
          <button onClick={() => sort(2)}>**</button>
          <button onClick={() => sort(3)}>***</button>
          <button onClick={() => sort(4)}>****</button>
          <button onClick={() => sort(5)}>*****</button>
        </div>
        <div>Sort by price</div>
        <button onClick={handleSort}>
Low To High
        </button>
        <div>
          <button
            onClick={() => {
              let newlist = data.data.filter((el) => {
                return el.payment_methods === "Card";
              });
              setList(newlist);
            }}
          >
            Card
          </button>
          <button
            onClick={() => {
              let newlist = data.data.filter((el) => {
                return el.payment_methods === "Cash";
              });
              setList(newlist);
            }}
          >
            Cash 
          </button>
        </div>
       
      </div>

      <div className="list-container">
        {list.map((item) => {
          return (
            <div>
              <ShowItem key={item.Restarunt_name} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
