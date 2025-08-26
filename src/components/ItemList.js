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

import CDN_URL from "../utils/constants";

const ItemList = ({ items,dummy}) => {
//   console.log(items)
// console.log(dummy);

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
            <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white text-green-600 font-semibold text-sm px-3 py-1 rounded-md shadow-md">
              ADD+
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
