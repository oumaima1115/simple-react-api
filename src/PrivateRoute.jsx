import { Navigate } from "react-router-dom";

function PrivateRoute({ isAuth, children }) {
  console.log("isAuth dans PrivateRoute :", isAuth);
  return isAuth ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute; 

// With replace
// The browser history changes like this:

// text
// Before: / → /products
// After:  / → /login