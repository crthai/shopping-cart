import {useState} from 'react';
//Components
import Fruit from './components/Fruit/Fruit';
import Cart from '../src/components/Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import { LinearProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Data from '../src/backend/Data';
//Styles
import { Wrapper, StyledButton } from './styles';
//Types
export type CartItemType = {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: {
    carbohydrates: number,
    protein: number,
    fat: number,
    calories: number,
    sugar: number
  }
}

export type FrutsQuantities = {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  quantity: number;
  nutritions: {
    carbohydrates: number,
    protein: number,
    fat: number,
    calories: number,
    sugar: number
}
}

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as FrutsQuantities[]);
  const { fruits } = Data;
  const getTotalItems = (items: CartItemType[]) => null;
  
  const handleCartClear = () => {
    setCartItems([]);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart){
        return prev.map(item => (
          item.id === clickedItem.id
          ? {...item, quantity: item.quantity + 1}
          : item
        ))
      }

      return [...prev, {...clickedItem, quantity: 1}];
    })
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
         if(item.id === id){
          if(item.quantity === 1) return ack;
          return [...ack, {...item, quantity: item.quantity - 1}];
         } else {
          return [...ack, item];
         }
      }, [] as FrutsQuantities[])
    ))
  };

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)} >
        <Cart cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart} 
              clearCart={handleCartClear}   
         />
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {fruits?.map(fruit => (
          <Grid item key={fruit.id} xs={12} sm={4}>
            <Fruit fruit={fruit} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
};

export default App;
