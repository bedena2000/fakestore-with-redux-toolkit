import React from 'react';
import './MainPage.scss';

// Components
import { Header } from '../../components/Header/Header';
import { Categories } from '../../components/Categories/Categories';
import { MainSection } from '../../components/MainSection/MainSection';
import { Footer } from '../../components/Footer/Footer';

// React Router
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-page">
      <div>
        <Header title="Fake Store" />
        <div className="links-wrapper">
          <Link to="/shop">Shop Page</Link>
          <Link to="/wishlist">Wishlist Page</Link>
          <Link to="/cartPage">Cart Page</Link>
        </div>
        <MainSection />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
