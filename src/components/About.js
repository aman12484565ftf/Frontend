import UserContext from "../utils/userContext.js";
import User from "./User.js";
import UserClass from "./UserClass.js";
import React from "react";
// const About=()=>{
//         return (
//      <div>
//         <h1>About </h1>
//         <h2>This is About ! Thanks for Visit </h2>
//         {/* <User name={"Aman Sharma function based"}/> */}
//         {/* //this is going as an argument to user function and  */}
//         <UserClass name={"Amber class based"}/>
//      </div>
//         );
        
// };


class About extends React.Component{
   constructor(props){
      super(props);

   }
   render(){
      //aceesingnhook in class based

      return (
       <div>
               <h1>About Class Component</h1>
               <div>
                  <UserContext.Consumer>
                     {/* //it takes a cb function in class bases and this give acceess to context */}
               {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                  </UserContext.Consumer>
               </div>
       <h2>This is About ! Thanks for Visit </h2>
       {/* <User/> */}
         <UserClass name={"Amber class based1"}/>
      </div>
      );
   }
}
export default About;