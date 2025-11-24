import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../AppProvider";
import { useContext } from "react";

const Protected = () => {
    const {user} = useContext(AppContext);
    return user ? <Outlet/> : <Navigate to='/login' />
}

export default Protected;