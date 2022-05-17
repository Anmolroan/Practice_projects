import React from 'react'
type Greetprop ={
    name: string;
    messageCount:number;
}
function Greet(props:Greetprop) {
  return (
    <div>Welcome {props.name} you have 10 msgs</div>
  )
}

export default Greet