// Components
import { Menu } from './components/Menu/Menu';
import { MenuBurger } from './components/MenuBurger/MenuBurger';
import { Background } from './components/background/Background';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Describe } from './pages/Describe/Describe';
// Pages
import MainPage from './pages/MainPage/MainPage';
import { Shop } from './pages/Shop/Shop';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { CartPage } from './pages/CartPage/CartPage';
// React Router
// React Router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/shop',
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/describe',
    element: <Describe />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cartPage',
    element: <CartPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
