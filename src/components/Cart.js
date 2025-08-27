import { useDispatch, useSelector } from "react-redux";
// import itemList from "./ItemList"
//now i have to read cart from store 
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    //Optimize performance subscribe to right store 
    const cartItems=useSelector((store)=>store.cart.items);

    // const store=useSelector((store)=>store);
    // //less efficient 
    // const cartItems=store.cart.items
// --->  Dont ever subscribe to whole store subscribe to only small portion of store 
    const dispatch=useDispatch();
     
    const handleClearCart=()=>{
    dispatch(clearCart());
    }
return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">
             Cart
        </h1>
    <div className="w-6/12 m-auto">
        {/* <ItemList items={cartItems}/> */}
        <button  className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
        >
            Clear Cart
            </button> 
             {cartItems.length===0 && (<h1>Cart is Empty.Add Items💕 </h1>)}
        <ItemList  items={cartItems}/>

    </div>
       
    </div>
)
}
export default Cart;
