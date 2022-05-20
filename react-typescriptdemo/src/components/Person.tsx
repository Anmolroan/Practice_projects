import React from 'react'
type PersonType ={
    name:{
        first:string,
        last:string
    }
}
function Person(props:PersonType) {
  return (
    <div>{props.name.first}{props.name.last}</div>
  )
}

export default Person