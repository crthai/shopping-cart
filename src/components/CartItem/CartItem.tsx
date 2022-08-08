import Button from '@material-ui/core/Button';
//Types
import {CartItemType, FrutsQuantities} from '../../App';
//Styles
import {Wrapper} from './CartItem.styles';

type Props = {
  item: FrutsQuantities;
  addToCart: (clickedItem: FrutsQuantities) => void;
  removeFromCart: (id: number) => void;
}


const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
   <Wrapper>
     <div>
      <h3>{item.name}</h3>
      </div>
      <div className='buttons'>
        <Button size="small"
                disableElevation
                variant='contained'
                onClick={() => removeFromCart(item.id)}>
                  -
         </Button>
         <p>{item.quantity}</p>
         <Button size="small"
                disableElevation
                variant='contained'
                onClick={() => addToCart(item)}>
                  +
         </Button>
      </div>
   </Wrapper>
);

export default CartItem;