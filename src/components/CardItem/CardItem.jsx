import './CardItem.scss';

// Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { TailSpin } from 'react-loader-spinner';

// Redux Toolkit
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../../app/slices/describeSlice';
import { getAllShopItems } from '../../app/selectors/selectors';
import { Link } from 'react-router-dom';

export const CardItem = ({ title, price, description, category, imageUrl, id }) => {
  const dispatch = useDispatch();
  const allShopItems = useSelector(getAllShopItems);

  const expandItem = () => {
    const ourItem = allShopItems.filter((shopItem) => shopItem.id === id);
    if (ourItem.length !== 0) {
      dispatch(updateItem(ourItem[0]));
    }
  };

  return (
    <div className="card">
      <div className="card-top">
        {imageUrl ? (
          <img className="card-top-img" alt="cardItem" src={imageUrl} />
        ) : (
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <FavoriteBorderIcon titleAccess="add to wishlist" className="card-bottom-left__icon" />
          <Link to="/describe" className="card-bottom-left__icon">
            <SearchIcon onClick={expandItem} titleAccess="expand" />
          </Link>
        </div>
        <div className="card-bottom-right">
          <div className="card-bottom-right-add-to-cart">
            <ShoppingCartIcon />
            <p className="card-bottom-right-add-to-cart-title">Add To Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};
