import { useState } from "react";

function Counter() { //Upper Part : 
    
    // let count = 0;

    const [count, setCount]    =  useState(112);
    return ( //Lower Part : 
    <div>
            <h3>Value of count is : {count}</h3>

      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(count - 1)}>-</button>
      <button onClick={()=> setCount(0)}>0</button>
    </div>
  )
}

export default Counter;







