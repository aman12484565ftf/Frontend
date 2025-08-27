import { createSlice } from "@reduxjs/toolkit";

//function which takes config to take a slice 
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    //actions and reducers -basically an object which has diff type of actions we can take 
    reducers:{
        addItem:(state,action)=>{
                                          //Vanilla (older)redux dont mutate state =>returning was mandatory  =>Prohibited

                                       // const newState=[...state];
                                  // newState.items.push(action.payload);
                                  // return newState

            //mutating  the state here->directly
            //Redux ToolKit users immer js behind the scenes 



            //We have to mutate the state  =>redux is still doing the old way behind the scenes 
            state.items.push(action.payload);
        },
    removeItem:(state)=>{
        state.items.pop();
    },
    clearCart:(state)=>{
        //state=[]////modify locally just adding refernce of it not changing mutating the state
        state.items.length=0;
        //state=[] will not work 
    },
    },

});
//createslice return an object in cartslice 
// { name:"cart",
//  actions:{
//     addItem
// },
// reducer:(state,action)=>newState,
// }
export const{addItem,removeItem,clearCart}=cartSlice.actions;
//we will export our actions and reducers 
export default cartSlice.reducer;




// 👉 createSlice generates a reducer function that knows:

// the initialState ({ items: [...] })

// how to handle your addItem, removeItem, clearItem actions

// That reducer looks like this (simplified):