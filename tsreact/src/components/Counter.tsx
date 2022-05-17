import React from 'react'
type CounterProps ={
    init:number;
    children?:JSX.Element | JSX.Element[];
}
function Counter(props:CounterProps) {
    const {init,children} = props;
    const [counter,setCounter] = React.useState(init)
  return (
    <div>
        <h3> Counter :{counter}</h3>
        {children}
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
    </div>
  )
}

export default Counter