import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import FindARide from './pages/FindARide/FindARide';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import OfferARide from './pages/OfferARide/OfferARide';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/find-a-ride',
          element: <FindARide />
        },
        {
          path: '/offer-a-ride',
          element: <OfferARide />
        },
        {
          path: '/login',
          element: <Login />
        }
      ],
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
