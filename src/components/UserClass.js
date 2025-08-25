import React from "react";

//import {Component} from "react;
class UserClass extends React.Component{
    //Whenever a new instance of class is created constructor is called and props is extracted 
    constructor(props){
        super(props);
        this.state={
            userInfo:{
            name:"Dummy",
            location:"Default",
            },
            // count:0,
                };
    }

    async componentDidMount(){
const data= await fetch(process.env.REACT_APP_GITHUB_API,{
    headers:{
    Authorization:`Bearer ${process.env.REACT_APP_GITHUB_TOKEN }`,

        },
});
const json=await data.json();
this.setState(
    {
        userInfo:json,
    }
)
// console.log(json);

    }

    //called after mounting lifecycle 
    // componentDidUpdate(){
    //     console.log("Component Did update");
    // }


    // called when i go from mount page or to another page ==as soon as i go to about page component will unmount 
    // componentWillUnmount(){
// console.log("Component Will Umount");
    // }


    render(){   
    //     return( 
    //     <div className="user-card">
    //         {/* <h1>Count:{this.state.count}</h1>
    //         <h2>Count2:{this.state.count2}</h2> */}
    //         <button onClick={()=>{
    //             //nEVER UPDATES STATES VARIABLES DIRECTLY LIKE  this.state.count=this.state.count+1;
    //             this.setState({
    //                 count:this.state.count+1,
    //                 count2:this.state.count2+1,
    //             })
    //         }}>Count++</button>

    //   <h2>{this.props.name}</h2>
    //     <h3>Location: H.P</h3>
    //     <h4>Contact :aman1@gmail.com</h4>
    //  </div>
    //     );
const {name,bio,location,avatar_url}=this.state.userInfo;
      return( 
        <div className="user-card">
            <img src={avatar_url}/>
            <h2>{bio}</h2>
            <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact :aman1@gmail.com</h4>
     </div>
        );
    }

}
export default UserClass;




/*** 
//MOUNTING LIFECYCLE   

//first of all as soon as userclass loaded
//constructor called =state variable created with default value
//render happends(HTML dummy>)=state variable has efault value =our component renders with default value
//React updated dom with some dummy data 

//component Did Mount called  <API CALL> <This.setState>=>State variable is updated


// ****UPDATE 
* RENDERS(API DATA)
<HTML (NEW api data)>
component Did update 


*/