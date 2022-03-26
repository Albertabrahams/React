import React from 'react'
import { useState } from 'react/cjs/react.production.min'

//! Don’t call Hooks inside loops, conditions, or nested functions.
//! Don’t call Hooks from regular JavaScript functions.
//* Only call Hooks at the top level
//* Call Hooks from React function components.
//* Call Hooks from custom Hooks.

const UseStateComp = () => {
const[count, setCount]=useState(0)
const increase = ()=> setCount(count+1)
  return (
    <div className="function">
      <h2>Functional Component</h2>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default UseStateComp
