import { createBrowserRouter } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

export default router;
