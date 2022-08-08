import CartItem  from '../CartItem/CartItem';
//Styles
import {Wrapper} from './Cart.styles';
//Types
import {FrutsQuantities} from '../../App';
import { Button } from '@material-ui/core';

type Props = {
  cartItems: FrutsQuantities[];
  addToCart: (clickedItem: FrutsQuantities) => void;
  removeFromCart: (id: number) => void;
  clearCart: (id: number) => void;
};


const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart, clearCart}) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items are added. </p> : null}
      {cartItems.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
        <Button size="small"
                disableElevation
                variant='contained'
                onClick={() => clearCart}>
                  Clear Cart
          </Button>
    </Wrapper>
  )
};

export default Cart;