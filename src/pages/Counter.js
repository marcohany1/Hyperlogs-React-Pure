import React from "react";
import { useState } from "react";

const Counter = () => {
  
 const [count,setCount]=useState(0)

 function handleincreament(previousCount){
  setCount(previousCount=>previousCount+1);
}
function handledecreament(previousCount){
  setCount(previousCount=>previousCount-1);
}
 fetch("./db.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
  
   //<div data-testid="Counter">
     // <h1>Counter</h1>
      //<button className="btn btn-primary" onClick={handleincreament}>+</button>
     //<span className="btn btn-secondary btn-bg">{count}</span>
      //<button className="btn btn-primary" onClick={handledecreament}>-</button>
    //</div>
    

  }

export default Counter;
