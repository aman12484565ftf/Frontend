import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


//lazy loading here :
const Grocery=lazy(()=>import ("./components/Grocery")); 
// With block body (uses return):
const AppLayout=()=>{
  return (
    <div className="app">
<Header/>
<Outlet/>
    </div>
  )
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
{
   path:"/about",
   element:<About/>
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

    ],
    errorElement:<Error/>
  },
])



const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>)