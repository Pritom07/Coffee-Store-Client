import { useContext } from "react";
import { ThemeContext } from "../Provider";
import { Navigate } from "react-router-dom";
import Loading from "../Loading";

const PrivateRoute = ({ children }) => {
  const { User, loading } = useContext(ThemeContext);
  if (loading) {
    return <Loading />;
  }
  if (User) {
    return children;
  }
  return <Navigate to="/pages/signin"></Navigate>;
};

export default PrivateRoute;
