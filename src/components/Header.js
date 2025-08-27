import { LOGO_URL } from "../utils/constants";
import {useState,useContext} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const  Header=()=>{
  const [btnName,setName]=useState("Login");
  const onlinestatus=useOnlineStatus();
  //hook taking context 
  const {loggedInUser}=useContext(UserContext);
  // console.log();

  //Selector
  //SubscriBing to store using opur selector
  //when click on add+ button modifying the store and changing and selector keeping an eyex
  const cartItems=useSelector((store)=>store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-sm sm:bg-yellow-50  ">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} alt="image"/>
      </div>
<div className="flex items-center">
<ul className="flex p-4 m-4">
  <li className="px-4">
    Online Status:{onlinestatus ? "✅":"❌"}
     </li>
<li className="px-4"><Link to="/">Home</Link></li>

<li className="px-4">
<Link to='/about'>  About  </Link>
  </li>

<li className="px-4">
  <Link to="/contact">Contact Us</Link>
  </li>
  <li className="px-4">
  <Link to="/grocery">Grocery</Link>
  </li>
{/* //Subscribing to store  */}
<li className="px-4 fnt-bold text-xl">
  <Link to="/cart"> Cart -({cartItems.length})</Link>
 

  </li>



 <button className="login"
  onClick={()=>{
    btnName=="Login"?setName("Logout"):setName("Login");
  }}
>
  {btnName}
 </button>

 <li className="px-4 font-bold">{loggedInUser}</li>
</ul>
</div>
    </div>
  );
};
export default Header;