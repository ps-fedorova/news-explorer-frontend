import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  React.useEffect(() => {
    if (!props.loggedIn && !localStorage.getItem('jwt')) {
      props.setLoginOpen(true);
    }
  });

  return (
    <Route>
      {
        props.loggedIn || localStorage.getItem('jwt') ? <Component {...props} /> : <Redirect to='./'/>
      }
    </Route>
  );
};
export default ProtectedRoute;
