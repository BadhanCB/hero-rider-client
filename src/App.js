import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import FindARide from './pages/FindARide/FindARide';
import Home from './pages/Home/Home';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'find-a-ride',
          element: <FindARide />
        }
      ],
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
