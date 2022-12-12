import './MenuBurger.scss';
import { useSelector } from 'react-redux';
import { burgerActiveSelector } from '../../app/selectors/selectors';
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const MenuBurger = () => {
  const burgerState = useSelector(burgerActiveSelector);
  return (
    <div className={`menu-burger ${burgerState ? 'menu-burger-active' : 'menu-burger-not-active'}`}>
      
      <div className='menu-burger-categories'>
        <CategoriesItem categoryName="Clothes" />
        <CategoriesItem categoryName="Electronics" />
        <CategoriesItem categoryName="Furniture" />
        <CategoriesItem categoryName="Shoes" />
      </div>

      <div className="shopping-cart">
        <ShoppingCartIcon fontSize="large" />
        <h4>Shopping Cart</h4>
      </div>
    </div>
  );
};
