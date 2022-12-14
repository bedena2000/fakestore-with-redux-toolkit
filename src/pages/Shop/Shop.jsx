import { useEffect, useState } from 'react';
import './Shop.scss';

// Api tools
import axios from 'axios';

// Redux Toolkit
import { useSelector, useDispatch } from 'react-redux';
import { addShopItems } from '../../app/slices/shopItemsSlice';
import { getCurrentPage } from '../../app/selectors/selectors';
import { getAllShopItems } from '../../app/selectors/selectors';

// Components
import { Header } from '../../components/Header/Header';
import { Categories } from '../../components/Categories/Categories';
import { CardItem } from '../../components/CardItem/CardItem';
import { PaginationWrapper } from '../../components/Pagination/Pagination';

// React Spinners
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export const Shop = () => {
  const items = useSelector(getAllShopItems);
  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  const getShopItems = async () => {
    const result = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=16`,
    );
    const action = addShopItems(result.data);
    dispatch(action);
  };

  useEffect(() => {
    getShopItems();
  }, [currentPage]);

  return (
    <div className="shop">
      <Header title="Shop Page" />
      <Categories />
      <Link to="/">Main Page</Link>
      <div className="shop-wrapper">
        {items.length === 0 ? (
          <div className="loading-icon">
            <ColorRing
              visible={true}
              height="160"
              width="160"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
        ) : (
          items.map((item) => (
            <CardItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              imageUrl={item.images[0] ? item.images[0] : item.images[1]}
            />
          ))
        )}
      </div>
      <div className="pagination-wrapper">
        <PaginationWrapper />
      </div>
    </div>
  );
};
