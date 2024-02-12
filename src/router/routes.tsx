import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import UserDetail from '../pages/UserDetail';

const router = createBrowserRouter([
  {
    // parent route component
    element: <Layout />,
    // child route components
    children: [
      {
        path: '/',
        element: <Home />,
        children: [],
      },
      {
        path: 'user-details/:id',
        element: <UserDetail />,
      },
    ],
  },
]);

export default router;
