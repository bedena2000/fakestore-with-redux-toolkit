import './CardItem.scss';

// Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CardItem = ({ title, price, description, category, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img className="card-top-img" alt="cardItem" src={imageUrl} />
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <FavoriteBorderIcon titleAccess='add to the wishlist' className='card-bottom-left__icon'/>
          <SearchIcon titleAccess='expand' className='card-bottom-left__icon'/>
        </div>
        <div className="card-bottom-right">
          <div className='card-bottom-right-add-to-cart'>
            <ShoppingCartIcon />
            <p className='card-bottom-right-add-to-cart-title'>Add To Cart</p>
          </div>  
        </div>
      </div>
    </div>
  );
};
