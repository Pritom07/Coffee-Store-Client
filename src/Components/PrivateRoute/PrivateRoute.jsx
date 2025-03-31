import { useContext } from "react";
import { ThemeContext } from "../Provider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { User, loading } = useContext(ThemeContext);

  if (loading) {
    return <Loading />;
  }

  if (User) {
    return children;
  }

  return <Navigate to="/pages/signin" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
