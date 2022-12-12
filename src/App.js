// Components
import { Menu } from './components/Menu/Menu';
import { MenuBurger } from './components/MenuBurger/MenuBurger';
import { Background } from './components/background/Background';
// Pages
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="app">
      <MainPage />
      <Menu />
      <MenuBurger />
      <Background />
    </div>
  );
}

export default App;
