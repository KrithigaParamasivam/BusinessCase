import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Login from "./Login";


export default  function RoleBasedRouting({
  component: Component, roles, ...rest
}) {
  return (
    <>
      { grantPermission(roles) && (
      <Route
        {...rest}
        render={(props) => (
          <>
            <Component {...props} />
          </>
        )}
      />
      )}
      {
        !grantPermission(roles) && (
          <Route
            render={() => (
              <>
                <Login /> // Unauthorized Page View (skippable)
              </>
            )}
          />
        )
      }
    </>
  );
}
export const grantPermission = (requestedRoles) => {
    const permittedRoles =  localStorage.getItem('roles');
    return requestedRoles.includes(permittedRoles);
  };