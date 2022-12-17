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
import { addToWishlist } from '../../app/slices/wishlistSlice';
import { addItemToCart, updateCartNumber } from '../../app/slices/cartSlice';

export const CardItem = ({ title, price, description, category, imageUrl, id }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist);
  const allShopItems = useSelector(getAllShopItems);
  const cartItemsList = useSelector((state) => state.cartItems);

  const expandItem = () => {
    const ourItem = allShopItems.filter((shopItem) => shopItem.id === id);
    if (ourItem.length !== 0) {
      dispatch(updateItem(ourItem[0]));
    }
  };

  const addToWishlistFunc = () => {
    const ourItem = allShopItems.filter((shopItem) => shopItem.id === id);
    const yesOrNot = wishlistItems.find((item) => item.id === ourItem[0].id);
    if (!yesOrNot) {
      dispatch(addToWishlist(ourItem[0]));
    }
  };

  const addToCart = () => {
    const ourItem = allShopItems.filter((shopItem) => shopItem.id === id)[0];
    const ourCartItem = cartItemsList.find((item) => item.id === ourItem.id);
    if (ourItem && !ourCartItem) {
      const newItem = {
        ...ourItem,
        count: 1,
      };
      dispatch(addItemToCart(newItem));
    } else {
      dispatch(updateCartNumber(ourItem.id));
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
          <Link to="/wishlist">
            <FavoriteBorderIcon
              onClick={addToWishlistFunc}
              titleAccess="add to wishlist"
              className="card-bottom-left__icon"
            />
          </Link>
          <Link to="/describe" className="card-bottom-left__icon">
            <SearchIcon onClick={expandItem} titleAccess="expand" />
          </Link>
        </div>
        <div className="card-bottom-right">
          <Link to="/cartPage" className="card-bottom-right-add-to-cart" onClick={addToCart}>
            <ShoppingCartIcon />
            <p className="card-bottom-right-add-to-cart-title">Add To Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
