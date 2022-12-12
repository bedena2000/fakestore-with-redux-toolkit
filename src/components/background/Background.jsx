import './Background.scss';
import { useSelector, useDispatch } from 'react-redux';
import { burgerActiveSelector } from '../../app/selectors/selectors';
import { changeBurgerActive } from '../../app/slices/menuSlice';

export const Background = () => {
  const dispatch = useDispatch();
  const burgerState = useSelector(burgerActiveSelector);

  const onBackgroundClick = () => {
    const action = changeBurgerActive();
    dispatch(action);
  };

  return (
    <div
      className={`background ${burgerState ? 'background-active' : 'background-not-active'}`}
      onClick={onBackgroundClick}></div>
  );
};
