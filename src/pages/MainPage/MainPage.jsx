import React from 'react';
import './MainPage.scss';

// Components
import { Header } from '../../components/Header/Header';
import { Categories } from '../../components/Categories/Categories';
import { MainSection } from '../../components/MainSection/MainSection';
import { Footer } from '../../components/Footer/Footer';

const MainPage = () => {
  return (
    <div className="main-page">
      <div>
        <Header title="Fake Store" />
        <Categories />
        <MainSection />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
