import { useState,useEffect } from "react";
// const User=(props)=>{
//     const[count,setCount]=useState(0);
//     const[count2]=useState(1);
//     return <div className="user-card">
//         <h1>Count:{count}</h1>
//         <h2>Count2:{count2}</h2>
//         <h2>{props.name}</h2>
//         <h3>Location: H.P</h3>
//         <h4>Contact :aman@gmail.com</h4>

//     </div>
// }
// export default User;
// import React, { useState } from "react";

// const Counter = (props) => {
//   // declare a state variable "count" with initial value 1
//   const [count, setCount] = useState(1);

//   return (
//     <div className="user-card">
//       <h1>Count: {count}</h1>
//       <button
//         onClick={() => {
//           // use setCount to update the state
//           setCount(count + 1);
//         }}
//       >
//         Count++
//       </button>
//       <h2>{props.name}</h2>
//       <h3>Location: H.P</h3>
//       <h4>Contact: aman@gmail.com</h4>
//     </div>
//   );
// };

// export default Counter;

import React from "react";
import { useState } from "react";
const User=(props)=>{
    const[count,setCount]=useState(1);
return (
<>
<h1>Count:{count}</h1>
<button onClick={()=>{setCount(count+1)}}>Click and see magic</button>
{/* <button onClick={()=>{setCount(1)}}>Click and see magic</button> */}
    <h1>{props.name}</h1>
    </>
)
}


// const User=()=>{
// useEffect(() => {
//   const handleResize = () => console.log(window.innerWidth);

//   window.addEventListener("resize", handleResize);

//   // cleanup removes listener
//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);
// }

export default User;