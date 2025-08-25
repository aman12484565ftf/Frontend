import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const  Header=()=>{
  const [btnName,setName]=useState("Login");
  const onlinestatus=useOnlineStatus();
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

<li className="px-4">Cart</li>
 <button className="login"
  onClick={()=>{
    btnName=="Login"?setName("Logout"):setName("Login");
  }}
>
  {btnName}
 </button>
</ul>
</div>
    </div>
  );
};
export default Header;