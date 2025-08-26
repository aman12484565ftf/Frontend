import { useContext } from "react";
import CDN_URL  from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser}=useContext(UserContext)

  // Safely destructure with fallback
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla
  } = resData?.info || {};

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200" >
    {/* // style={{ backgroundColor: "#f0f0f0" }}> */}
      <img
        className="rounded-lg"
        alt={`${name} logo`}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{`${name} `}</h3>
      <h4 className="text-slate-500">{cuisines?.join(", ")}</h4>
      <h3>{avgRating} ⭐ stars</h3>
      <p> {costForTwo}</p>
      <h3>{sla?.deliveryTime ? `${sla.deliveryTime} mins` : "Delivery time unavailable"}</h3>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return (
      <>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
      <RestaurantCard {...props}/>
      </>
    )

  }
}


export default RestaurantCard;
