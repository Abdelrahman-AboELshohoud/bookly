import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  return loggedIn ? <Outlet /> : <Navigate to="login" />;
}
