// Components
import { Menu } from "./components/Menu/Menu";
import { MenuBurger } from "./components/MenuBurger/MenuBurger";
// Pages
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return <div className="app">
    <MainPage />
    <Menu />
    <MenuBurger />
  </div>;
}

export default App;
