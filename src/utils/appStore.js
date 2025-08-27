import { configureStore } from "@reduxjs/toolkit";
import cartReducer from"./cartSlice";

const appStore=configureStore(
    //why reducer : if we want to modify store it have reducer which combines reducers of their slices 
    //for each slice we have diff reducer 

    //reducer can contain multiple small reducers userReducer,Theme Reducer 
{
reducer:{ 
cart:cartReducer,
},
}
);

export default appStore;