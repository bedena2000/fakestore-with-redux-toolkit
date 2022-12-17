import './CartPage.scss';

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// Components
import { Header } from '../../components/Header/Header';

// Redux Toolkit
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../app/slices/cartSlice';
import { updateCartNumber, minusCartNumber } from '../../app/slices/cartSlice';
import { Link } from 'react-router-dom';

const CartItemMUI = ({ id, picture, title, description, count }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartItems);

  const removeItemFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const plusCount = () => {
    dispatch(updateCartNumber(id));
  };

  const minusCount = () => {
    dispatch(minusCartNumber(id));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={picture} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="counter-wrapper">
        <div onClick={plusCount} className="plus-count">
          +
        </div>
        <div className="counter-number">{count}</div>
        <div onClick={minusCount} className="minus-count">
          -
        </div>
      </div>
      <CardActions>
        <Button onClick={removeItemFromCart} size="small" color="primary">
          remove
        </Button>
      </CardActions>
    </Card>
  );
};

export const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  return (
    <div className="cartPage">
      <Header title="cart page" />
      <Link to="/">Home Page</Link>
      <div className="cartPage-wrapper">
        <h1>Items Count: {cartItems.length}</h1>
        <div className="cartPage-wrapper-box">
          {cartItems.map((item) => (
            <CartItemMUI
              key={item.id}
              id={item.id}
              picture={item.images[0]}
              title={item.title}
              description={item.description}
              count={item.count}
            />
          ))}
        </div>
      </div>
      <div className="price">
        PRICE:{' '}
        <span>
          {cartItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.count * currentValue.price;
          }, 0)}$
        </span>
      </div>
    </div>
  );
};
