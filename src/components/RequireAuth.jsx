import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"


// eslint-disable-next-line react/prop-types
const RequireAuth = ({allowedRoles}) => {
    const { auth } = useAuth()
    const location = useLocation()
  return (
    // eslint-disable-next-line react/prop-types
    auth?.roles?.find(role => allowedRoles?.includes(role)) ?
    <Outlet />
    :
    auth?.user?
    <Navigate to="/unauthorized" state={{from: location}} replace/>
    :
    <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default RequireAuth