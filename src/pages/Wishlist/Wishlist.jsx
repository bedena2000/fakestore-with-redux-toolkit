import './Wishlist.scss';

// Components
import { Header } from '../../components/Header/Header';

// Material UI
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

// Redux Toolkit
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../app/slices/wishlistSlice';
import { Link } from 'react-router-dom';

const WishlistItem = ({ id, name, description, picture }) => {
  const dispatch = useDispatch();
  const deleteFromWishlistFunc = () => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={`${picture}`} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteFromWishlistFunc}>
          Delete
        </Button>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
};

export const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="wishlist">
      <Link to="/">main page</Link>
      <Header title="wishlist" />
      <h1>You liked items: </h1>
      <div className="wishlist-wrapper">
        {wishlist.map((wishlistItem) => (
          <WishlistItem
            key={wishlistItem.id}
            id={wishlistItem.id}
            name={wishlistItem.title}
            description={wishlistItem.description}
            picture={wishlistItem.images[0]}
          />
        ))}
      </div>
    </div>
  );
};
