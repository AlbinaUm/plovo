import CartDishes from '../../components/Cart/CartDishes/CartDishes.tsx';
import React, { useEffect } from 'react';
import { DishCart } from '../../types';
import { Link, Outlet, useNavigate } from 'react-router-dom';

interface Props {
  cart: DishCart[];
}

const Checkout: React.FC<Props> = ({cart}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(cart.length === 0) navigate('/');
  }, [cart.length, navigate]);

  return (
    <>
      <h4>Checkout</h4>

      <CartDishes cart={cart}/>

      <div className="d-flex gap-2">
        <Link className="btn btn-danger" to="/">Cancel</Link>
        <Link className="btn btn-primary" to="continue">Continue</Link>
      </div>
      <Outlet/>
    </>
  );
};

export default Checkout;