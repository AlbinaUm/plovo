import CartDishes from '../../components/Cart/CartDishes/CartDishes.tsx';
import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks.ts';
import { selectCartDishes } from '../../store/slices/cartSlice.ts';


const Checkout = () => {
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartDishes);


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