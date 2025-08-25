import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
     let listOfRestaurant2=[
        { 
                data:{
            id:"334475",
            name:"KFC",
            cloudinaryImageId:"bdcd233971b7c81bf77e1fa4471280eb",
            cuisines:["Burgers","Biryani","American","Snacks","Fast Food"],
            costForTwo:"40000",
            deliveryTime:"36 min",
            avgRating:3.8 ,

        },
     },
     {
        data:{
            id:"334476",
            name:"Dominon's",
            cloudinaryImageId:"bdcd233971b7c81bf77e1fa4471280eb",
            cuisines:["Burgers","Biryani","American","Snacks","Fast Food"],
            costForTwo:"4000",
            deliveryTime:"46 min",
            avgRating:4.8,
        }
     
     },
     {
       data:{
           id:"334477",
            name:"MCD",
            cloudinaryImageId:"bdcd233971b7c81bf77e1fa4471280eb",
            cuisines:["Burgers","Biryani","American","Snacks","Fast Food"],
            costForTwo:"40000",
            deliveryTime:"16 min",
            avgRating:4.2,
       } 
     }
    ];

    const[listOfRestaurants,setListOfRestaurants]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

      useEffect(()=>{ 
  fetchData();
    }, []) 

  const fetchData=async()=>{
    const data=await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
  
//  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.198909&lng=77.7068926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"  
  );
    const json=await data.json();

  const restaurants =
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  setListOfRestaurants(restaurants);
  setFilteredRestaurant(restaurants);

  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus ===false)
  {
    return (
    <h1>You are offline !! CHECK NETWORK</h1>
    )
  }

  return listOfRestaurants.length===0 ?<Shimmer/> :(
    <div className="body">

      <div className="filter flex">

        <div className="search m-4 p-4 ">
<input 
type="text" 
className="border border-solidborder-black" 
value={searchText} 
 onChange={(e)=>{
  // setSearchText(e.target.value);
  setSearchText(e.target.value);

 }}/>
          <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
           onClick={()=>{
            const filteredRestaurant=listOfRestaurants.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurant);
          }}>
            Search
            </button>

        </div>

<div className="search m-4 p-4 flex items-center" >

<button 
        className="px-4 py-2 bg-gray-100 rounded-lg" 
        onClick={()=>{
            const filteredList=filteredRestaurant.filter((res)=>res.info.avgRating>4.3);
             setFilteredRestaurant(filteredList);
        }}
            >
                Top Rated Restaurants
                </button>
</div>

      </div>

    

<div className="flex flex-wrap">
 {filteredRestaurant.map((restaurant) => {
  const id =  restaurant?.info?.id;
  //  const avgRating = restaurant?.info?.avgRating;
  return (
    <Link key={id} to={"/restaurants/" + id}>

        {restaurant.info.avgRating>4.5?(
          <RestaurantCardPromoted resData={restaurant}/>):
          (
             <RestaurantCard resData={restaurant} />
          )
        }
      {/* <RestaurantCard resData={restaurant} /> */}
    </Link>
  );
})}

</div>


    </div>
  );
};
export default Body;