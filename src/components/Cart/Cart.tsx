import Modal from '../UI/Modal/Modal.tsx';
import { useState } from 'react';
import CartDishes from './CartDishes/CartDishes.tsx';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks.ts';
import { selectCartDishes } from '../../store/slices/cartSlice.ts';



const Cart = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const cartDishes = useAppSelector(selectCartDishes);

  return (
    <>
      <Modal show={showModal} closeModal={() => setShowModal(false)} title="Order">
        <div className="modal-body">
          <p>Do you want to continue to checkout?</p>
        </div>
        <div className="text-end">
          <button className="btn btn-success" onClick={() => navigate('/checkout')}>Continue</button>
        </div>
      </Modal>

      <h4>Cart</h4>
      <CartDishes cart={cartDishes}/>
      {cartDishes.length > 0 ?
        <div className="text-center">
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Order</button>
        </div> : null
      }
    </>
  );
};

export default Cart;
