import './CardItem.scss';

// Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { TailSpin } from 'react-loader-spinner';

export const CardItem = ({ title, price, description, category, imageUrl }) => {
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
          <SearchIcon titleAccess="expand" className="card-bottom-left__icon" />
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
