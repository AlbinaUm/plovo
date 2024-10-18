import Dishes from '../../components/Dishes/Dishes.tsx';
import Cart from '../../components/Cart/Cart.tsx';
import { DishCart, IDish } from '../../types';
import * as React from 'react';


interface  Props {
  dishes: IDish[];
  AddDishToCart: (dish: IDish) => void;
  cart: DishCart[];
}

const Home: React.FC<Props> = ({dishes, AddDishToCart, cart}) => {
  return (
    <div className="row justify-content-between">
      <div className="col col-md-5 mb-2">
        <Dishes dishes={dishes} addToCart={AddDishToCart}/>
      </div>
      <div className="col col-md-5 mb-2">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Home;