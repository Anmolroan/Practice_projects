import React ,{useReducer} from 'react'

function usereduce() {
    const init ={counter:0}
    function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return {count: state.count + 1};
          case 'decrement':
            return {count: state.count - 1};
          default:
            throw new Error();
        }
      }
      const [state, dispatch] = useReducer (reducer, init);
  return (
    <div>
    <div>{state.counter}</div>
    <button onClick={()=>dispatch('increment')}>Increment</button>
    <button onClick={()=>dispatch('decrement')}>Decrement</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
</div>
  )
}

export default usereduce