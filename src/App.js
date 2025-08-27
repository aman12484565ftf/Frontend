import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// import UserContext from "./utils/UserContext";
import UserContext from "./utils/userContext"; 

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//now we have to provide store to our react application so bridge between react app and redux 

import Cart from "./components/Cart"

//lazy loading here :
const Grocery=lazy(()=>import ("./components/Grocery")); 
const About=lazy(()=>import("./components/About"));
// With block body (uses return):
const AppLayout=()=>{
  //aUTHENTICATION CODE WRITTEN IF 
    const[userName,setUserName]=useState();
    useEffect(()=>{
  //make api call and send username and password
   const data={
    name:"Aman Sharma",
   }
   setUserName(data.name);
    },[])






  return (
    //Default
    //modify context value provided can be used anywhere in app (override the default value)
    //we created a local state variable bind 
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser :userName ,setUserName}}>

    <div className="app">
<Header/>
<Outlet/>
    </div>

    </UserContext.Provider>
</Provider>
  );
};

// With concise body (no return, no {}):
// Recommendation: use concise body for components that just return JSX.
// const AppLayout2 = () => (
//   <div className="app">
//     <Header />
//     <Outlet />
//   </div>
// );


const appRouter=createBrowserRouter([
  { 
    path:"/",
    element:<AppLayout/>,
    children:[
      {
    path:"/",
    element:<Body/>,
      },
// {
//    path:"/about",
//    element:<About/>
//   },
{
   path:"/about",
   element:<Suspense fallback={<h1>Loading About Us!</h1>}><About/></Suspense>
  },
   {
    path:"/contact",
    element:<Contact/> 
  },
  {
path:"/grocery",
element:<Suspense fallback={<h1>Loading Screen!</h1>}><Grocery/></Suspense>
  },
   {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/> 
  },
  {
    path:"/cart",
    element:<Cart/>
  }

    ],
    errorElement:<Error/>
  },
])



const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>)