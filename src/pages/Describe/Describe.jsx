import { useState } from 'react';
import './Describe.scss';

// Components
import { Header } from '../../components/Header/Header';

// Redux Toolkit
import { useSelector } from 'react-redux';
import { getDescribeItem } from '../../app/selectors/selectors';

// Router
import { Link } from 'react-router-dom';

// Images
import ErrorIcon from '../../assets/images/error-icon.png';

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Describe = () => {
  const currentItem = useSelector(getDescribeItem);
  console.log(currentItem);
  const [mainImage, setMainImage] = useState(
    currentItem[0]?.images[0] || currentItem[0]?.images[1] || currentItem[0]?.images[2] || null,
  );

  const newMainImage = (e) => {
    const dataAttribute = Number(e.target.getAttribute('data-number'));
    const imageUrl = currentItem[0]?.images[dataAttribute];
    setMainImage(imageUrl);
  };

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
    </div>
  );
};
