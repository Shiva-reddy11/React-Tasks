import { useState } from "react";


const Counter = ()=>{
    const[count,setCount]=useState(0);

     const countInc= ()=>{
        setCount(count+1)
        
     }
    return(
        <>
     <h1>Your Count is {count}</h1> 
     <p>your count num is {count%2==0?'even!':'odd!'}</p> 
     <button onClick={countInc}>Count Increment</button>
     </>
    )
}
export default Counter