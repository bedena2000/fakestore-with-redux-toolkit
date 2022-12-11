import './Menu.scss';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// Redux Toolkit
import { useSelector, useDispatch } from 'react-redux';
import { burgerActiveSelector } from '../../app/selectors/selectors';
import { changeBurgerActive } from '../../app/slices/menuSlice';

export const Menu = () => {
  const burgerState = useSelector(burgerActiveSelector);
  const dispatch = useDispatch();
  const changeBurger = () => {
    const action = changeBurgerActive();
    dispatch(action);
  };

  return (
    <div
      onClick={changeBurger}
      className={`menu-icon ${burgerState ? 'menu-icon-active' : 'menu-icon-not-active'}`}>
      <MenuOpenIcon className='menu-icon-src' fontSize="inherit" />
    </div>
  );
};
