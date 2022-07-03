import React ,{useState} from 'react'

function Three() {
    console.log('three');
    const [counter,setCounter]= useState(5);
  return (
    <div>
    Three
        <div>{counter}</div>
        <button onClick={()=>setCounter(counter+1)}>update one</button>
    </div>
  )
}

export default React.memo(Three)