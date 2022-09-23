import React,{useState} from "react";

function Counter(){
   
  const [count,setCount] = useState(0)
  function increment(){
    
    setCount(count + 1);
    
  setCount(count + 1);
  console.log(count)
  
  }
  
     return(
      <button onClick={increment}>{count}</button>
     )
    }


export default Counter;
