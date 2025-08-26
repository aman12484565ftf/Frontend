import ItemList from "./ItemList";
import {useState} from "react";
const RestaurantCategory=({data,showItems,setShowIndex,dummy})=>{

    //Responsible for show and hide item list mainly 

    // console.log(data);
    // const items = data.itemCards || data.categories || [];
    const items = data.itemCards
    ?data.itemCards
    :data.categories
    ?data.categories.flatMap(cat=>cat.itemCards): [];

   //   const [showtext,setShowText]=useState(false);  
    const handleClick=()=>{
    setShowIndex();
    };

    return <>
    {/* Header  */}
     <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
     <div className="flex justify-between cursor-pointer" onClick={handleClick}>
  <span className="font-bold text-lg">{data.title} ({data.itemCards?.length || data.categories?.length})</span>
        <span>⬇️</span>
     </div>

     {/* // this below is ui layer(jsx mainly) now i have to sync with data(state and variables all ) layer so i will have a state variable and it will decide shown or not  */}
        {showItems && <ItemList  items={items} dummy={dummy}/>}
     </div>
    {/* Accordian Body  -itemList*/}

    </>
}
export default RestaurantCategory;