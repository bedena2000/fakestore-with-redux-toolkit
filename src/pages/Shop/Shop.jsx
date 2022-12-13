import './Shop.scss';

// Redux Toolkit
import { useDispatch } from 'react-redux';
import { addShopItems } from '../../app/slices/shopItemsSlice';

// Components
import { Header } from '../../components/Header/Header';
import { Categories } from '../../components/Categories/Categories';
import { CardItem } from '../../components/CardItem/CardItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

// React Spinners
import { ColorRing } from 'react-loader-spinner';

export const Shop = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const getShopItems = async () => {
    const result = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=120');
    setItems(result.data);
    const action = addShopItems(result.data);
    dispatch(action);
  };

  useEffect(() => {
    getShopItems();
  }, []);

  return (
    <div className="shop">
      <Header title="Shop Page" />
      <Categories />
      <div className="shop-wrapper">
        {items.length === 0 ? (
          <div className='loading-icon'>
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
        ) : (items.map(item => <CardItem key={item.id} title={item.title} price={item.price} description={item.description} imageUrl={item.images[0]} />)
        )}
      </div>
    </div>
  );
};
