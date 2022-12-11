import './Header.scss';

// Image
import icon from '../../assets/images/main-page-additional.png';

export const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header__info">
        <div className="header__icon">
          <img src={icon} alt="icons" />
        </div>
        <h2 className='header__title'>{title}</h2>
        <div className="header__icon">
          <img src={icon} alt="icons" />
        </div>
      </div>
    </header>
  );
};
