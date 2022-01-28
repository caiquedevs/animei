import { ReactElement, useEffect } from 'react';
import { Route, Routes as Switch, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from './routes';

export default function RoutesAplication(prop: any): ReactElement {
  const isLoggedIn = useSelector((state: any) => state.authReducer.isLoggedIn);

  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isPrivate = routes.find((item) => item.path === location.pathname)?.isPrivate;
    if (isPrivate && !isLoggedIn) return navigate('/login');

    return;
  }, [isLoggedIn, location.pathname, navigate]);

  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Switch>
  );
}
