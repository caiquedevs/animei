import IRoute from 'interfaces/route';

import Page404 from 'pages/Page404';
import HomePage from 'pages/HomePage';

const routes: IRoute[] = [
  {
    icon: null,
    path: '/',
    component: HomePage,
    isPrivate: false,
  },
  {
    icon: null,
    path: '/login',
    component: HomePage,
    isPrivate: false,
  },
  {
    icon: null,
    path: '*',
    component: Page404,
    isPrivate: false,
  },
];

export default routes;
