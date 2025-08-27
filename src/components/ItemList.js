// import CDN_URL from "../utils/constants";
// const ItemList=({items})=>{
//     console.log(items);   
// return (
// <div>

//     {items.map((item,idx)=>(
//         <div key={item.card?.info?.id || idx }
//          className="p-2 m-2 border-gray-200
//           border-b-2 text-left flex justify-between">
            
//             <div >
//             <div className="py-2"> 
//                 <span>{item?.card?.info?.name} </span>
//  <span>- ₹{item?.card?.info?.price ? item.card.info.price/100 : item?.card?.info?.defaultPrice/100}  </span>
//                  </div>
//                  <p className="text-xs">{item?.card?.info?.description}</p>
//                  </div>
//                    <div className="w-32 h-32 p-2 flex items-center justify-center"> 
//                <img src={CDN_URL+item.card.info.imageId} className="w-full h-full object-contain rounded-lg shadow" /> 
//                </div>

//              </div>
//              ))}



//              </div>


//             )


// }
// export default ItemList;
// using useDispatch hook for updating card when click on add+
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import CDN_URL from "../utils/constants";

const ItemList = ({ items}) => {
//   console.log(items)
// console.log(dummy);


//Whenever im clicking on Add+ button a action is dispatched which calls a reducer function in cartSlice.js which updates the slice of the store
// because my header is subscribed to the store using a selector everything is working 




// adding item in store 
const dispatch=useDispatch();
const handleAddItem=(item)=>{
  //Dispatch an action
  //redux will take data create an object our of it take obj and pass as second argument in addItem
  // {
  // payload:data;

  // }

  //action is dispatched 
  dispatch(addItem(item));
} 

  return (
    <div>
      {items.map((item, idx) => (
        <div
          key={item.card?.info?.id || idx}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          {/* Left side - text */}
          <div className="flex-1 pr-4">
            <div className="py-2">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <span className="ml-2 text-gray-700">
                - ₹
                {item?.card?.info?.price
                  ? item.card.info.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Right side - image with ADD button */}
          <div className="relative w-28 h-28">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item?.card?.info?.name}
              className="w-full h-full object-cover rounded-lg shadow"
            />
            <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white text-green-600 font-semibold text-sm px-3 py-1 rounded-md shadow-md"
            onClick={()=>handleAddItem(item)}>
              ADD+
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
