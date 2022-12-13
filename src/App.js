// Components
import { Menu } from './components/Menu/Menu';
import { MenuBurger } from './components/MenuBurger/MenuBurger';
import { Background } from './components/background/Background';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
// Pages
import MainPage from './pages/MainPage/MainPage';
import { Shop } from './pages/Shop/Shop';
// React Router
// React Router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/shop',
    element: <Shop />,
    errorElement: <ErrorPage />
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
      <Menu />
      <MenuBurger />
      <Background />
    </div>
  );
}

export default App;
