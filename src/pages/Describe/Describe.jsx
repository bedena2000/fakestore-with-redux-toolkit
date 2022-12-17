import { useEffect, useState } from 'react';
import './Describe.scss';

// Components
import { Header } from '../../components/Header/Header';
import { CardItem } from '../../components/CardItem/CardItem';

// Redux Toolkit
import { useSelector } from 'react-redux';
import { getDescribeItem } from '../../app/selectors/selectors';

// Router
import { Link } from 'react-router-dom';

// Images
import ErrorIcon from '../../assets/images/error-icon.png';

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

export const Describe = () => {
  const currentItem = useSelector(getDescribeItem);
  const [mainImage, setMainImage] = useState(
    currentItem[0]?.images[0] || currentItem[0]?.images[1] || currentItem[0]?.images[2] || null,
  );

  const [categories, setCategories] = useState([]);

  const newMainImage = (e) => {
    const dataAttribute = Number(e.target.getAttribute('data-number'));
    const imageUrl = currentItem[0]?.images[dataAttribute];
    setMainImage(imageUrl);
  };

  useEffect(() => {
    const categoryName = currentItem[0].category.name;
    const categoriesById = {
      Clothes: 1,
      Electronics: 2,
      Furniture: 3,
      Shoes: 4,
      Others: 5,
      Mobile: 6,
    };
    const categoryId = categoriesById[categoryName];
    const getItemsByCategory = async (categoryIdForCall) => {
      const result = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`,
      );
      const categoriesElements = result.data;
      const newArray = [];
      newArray.push(categoriesElements[0]);
      newArray.push(categoriesElements[1]);
      newArray.push(categoriesElements[2]);
      setCategories(newArray);
    };
    getItemsByCategory();
  });

  return (
    <div className="describe">
      <Header title="description" />
      <div className="describe-wrapper">
        <Link to="/" className="describe-wrapper-go-back">
          Go Back
        </Link>
        <h2>Description:</h2>
        <div className="describe-wrapper__item">
          <div className="describe-wrapper__item-left">
            <div className="describe-wrapper__item-left-side-images">
              <div className="describe-wrapper__item-left-side-images-part">
                <img
                  alt="left-side"
                  src={currentItem[0]?.images[0] ? currentItem[0].images[0] : ErrorIcon}
                  data-number={0}
                  onClick={newMainImage}
                />
              </div>
              <div className="describe-wrapper__item-left-side-images-part">
                <img
                  alt="left-side"
                  src={currentItem[0]?.images[1] ? currentItem[0].images[1] : ErrorIcon}
                  data-number={1}
                  onClick={newMainImage}
                />
              </div>
              <div className="describe-wrapper__item-left-side-images-part">
                <img
                  alt="left-side"
                  src={currentItem[0]?.images[2] ? currentItem[0].images[2] : ErrorIcon}
                  data-number={2}
                  onClick={newMainImage}
                />
              </div>
            </div>
            <div className="describe-wrapper__item-left-main-image">
              <img alt="main" src={mainImage ? mainImage : ErrorIcon} />
            </div>
          </div>
          <div className="describe-wrapper__item-right">
            <h3>Title: </h3>
            <p>{currentItem[0]?.title ? currentItem[0].title : 'something went wrong'}</p>
            <h3>Description: </h3>
            <p className="describe-wrapper__item-right__description">
              {currentItem[0]?.description ? currentItem[0].description : 'something went wrong'}
            </p>
            <div className="describe-wrapper__item-right-price">
              <div>
                Price:{' '}
                <span>
                  {currentItem[0]?.price ? currentItem[0].price + '$' : 'something went wrong'}
                </span>
              </div>
            </div>
            <div className="describe-wrapper__item-right__button">
              <ShoppingCartIcon className="describe-wrapper__item-right__button__icon" />
              <p>Add To Cart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Another Recommendations */}

      <div className="recommendations">
        <h2>Recommended for you: </h2>
        <div className="recommendations-wrapper">
          {categories.map((item) => (
            <CardItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              imageUrl={item.images[0] ? item.images[0] : item.images[1]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
