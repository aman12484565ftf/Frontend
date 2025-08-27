import { createContext } from "react";

//ACCESS TO A IMP UTILITY FUNCTION
const UserContext=createContext({
    loggedInUser:"Default User",
})
export default UserContext;