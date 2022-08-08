import Button from '@material-ui/core/Button';
//Types
import {CartItemType} from '../../App';
//Styles
import {Wrapper} from './Fruit.styles';


type Props = {
  fruit: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Fruit: React.FC<Props> = ({ fruit, handleAddToCart }) => (
  <Wrapper>
    <div>
      <h3>  {fruit.name} </h3>
    </div>
    <Button onClick={() => handleAddToCart(fruit)}> Add to cart </Button>

  </Wrapper>
)

export default Fruit