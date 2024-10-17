import CartItem from './CartItem.tsx';
import { DishCart } from '../../types';
import * as React from 'react';

interface Props {
  cart: DishCart[];
}

const Cart: React.FC<Props> = ({cart}) => {

  const total = cart.reduce((acc, cartDish) => {
    acc = acc + cartDish.dish.price * cartDish.amount;
    return acc;
  }, 0);

  let cartList = (
    <>
      <h6 className="text-center my-4">No dish yet. Add something ...</h6>
    </>
  );

  if (cart.length > 0) {
    cartList = (
      <div>
        {cart.map(cartDish => (
          <CartItem key={cartDish.dish.id} cartDish={cartDish}/>
        ))}

        <div className="row align-items-center justify-content-between">
          <div className="text-start col-4 p-0"><p><strong>Total: </strong></p></div>
          <div className="text-end col-4 p-0"><p>{total} SOM</p></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <h4>Cart</h4>
      {cartList}
    </>
  );
};

export default Cart;
