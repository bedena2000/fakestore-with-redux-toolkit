import React from 'react';
import './MainPage.scss';

// Components
import { Header } from '../../components/Header/Header';
import { Categories } from '../../components/Categories/Categories';

const MainPage = () => {
  return (
    <div className='main-page'>
      <Header title="Fake Store" />
      <Categories />
    </div>
  )
}

export default MainPage;