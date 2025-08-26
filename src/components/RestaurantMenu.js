// import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [resInfo, setResInfo] = useState(null);
  const dummy ="Dummy Data";
  const  resInfo=useRestaurantMenu(resId); 

  const[showIndex,setShowIndex]=useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, [resId]);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
  //   );
  //   const json = await data.json();
  //   setResInfo(json?.data);
  // };
 
  if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage, avgRatingString, areaName } = info;

  const regularCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const menuSection = regularCards.find((c) => c.card?.card?.itemCards);
  const itemCards = menuSection?.card?.card?.itemCards || [];
// console.log(regularCards);
const 
categories=
regularCards.filter
((c)=>c.card?.["card"]?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
c.card?.["card"]?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
);

// console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg" >{cuisines?.join(", ")}</p> 
      {/* <p>{costForTwoMessage}</p> */}
      {/* <p>⭐ {avgRatingString} • {areaName}</p> */}
    

    {/* {categories accordions inside ResCategory} */}
     
    {categories.map((category,index)=>(
      //Controlled component now -parent is controlling now 
      <RestaurantCategory key={category.card?.card?.categoryId}
    data={category?.card?.card} 
    /***************//////////////////////before each of restaurant categopry controlling itself to show or not now its parent will
    showItems={index==showIndex ?true :false}
    // 👈 parent decides which one is open
    // setShowIndex={()=>setShowIndex(index)}
    setShowIndex={()=>
      setShowIndex(index==showIndex?null:index)
    }
    // parent gives child a way to change parent’s state 
  dummy={dummy}
    
    />
  ))}


      {/* <h2 className="font-bold text-xl mt-4">Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={item.card.info.id + "-" + index}>
            {item.card.info.name} – ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul> */}


    </div>
  );
};

export default RestaurantMenu;
