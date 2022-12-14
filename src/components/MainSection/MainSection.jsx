import './MainSection.scss';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';

// Image
import MainImage from '../../assets/images/main-page-image.jpg';

export const MainSection = () => {
  return (
    <div className="main-section">
      {/* Left Part */}

      <div className="main-section-left">
        <h1 className="main-section__title">Fake Shop</h1>
        <p className="main-section__description">
          This website isn't a real e-commerce, it's only for testing. i used api from here:
          <a className="main-section__description__link" href="https://fakeapi.platzi.com/">
            Platzi Fake Store API
          </a>
          and design from here:{' '}
          <a
            className="main-section__description__link"
            href="https://www.figma.com/file/FGhuxuFIp6ysK3ruH2M6ci/free-ecommerce-minimal-template-(Community)?node-id=18%3A12">
            Figma
          </a>
        </p>
        <Link to="/shop" className="main-section__button">
          <ShoppingBasketOutlinedIcon className="main-section__button__src" />
          <p className="main-section__button__text">Show Now</p>
        </Link>
      </div>

      {/* Right Part */}

      <div className="main-section-right">
        <img src={MainImage} alt="mainSectionImage" />
      </div>
    </div>
  );
};
