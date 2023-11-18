import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthorized) {
        navigate("/");
      }
    },
    [isAuthorized, navigate]
  );

  return isAuthorized ? children : null;
};

export default ProtectedRoute;
