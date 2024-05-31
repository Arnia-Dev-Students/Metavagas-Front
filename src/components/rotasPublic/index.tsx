import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user";

interface PublicRouteProps {
  redirectTo: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ redirectTo }) => {
  const { user } = useContext(UserContext);

  return user ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;
