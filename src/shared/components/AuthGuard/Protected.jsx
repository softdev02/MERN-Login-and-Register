
import { Navigate } from "react-router-dom";
import { isLoggedIn,getuserdetails } from "../../services/Token/token";
const Protected  = ({children,allowedRoles}) => {
  const userRole=getuserdetails()?getuserdetails().Role:false;
  if (!isLoggedIn()) {
    return <Navigate to="/" replace />
  }
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />
  }
  return children;
};

export default Protected;
