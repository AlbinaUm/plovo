import ToolBar from "./components/ToolBar/ToolBar.tsx";
import DishForm from "./components/DishForm/DishForm.tsx";
import Cart from "./components/Cart/Cart.tsx";
import Dishes from "./components/Dishes/Dishes.tsx";
import { useState } from "react";
import { DishCart, IDish } from './types';
import Modal from './components/UI/Modal/Modal.tsx';

const App = () => {
  const [cart, setCart] = useState<DishCart[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dishes, setDishes] = useState<IDish[]>([
    {
      id: '1',
      name: "Plov",
      description: "taste",
      price: 200,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
    {
      id: '2',
      name: "Pizza",
      description: "cheese",
      price: 500,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
    {
      id: '3',
      name: "Shaurma",
      description: "---",
      price: 250,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
  ]);

  const addNewDish = (newDish: IDish) => {
    setDishes((prevState) => [...prevState, newDish]);
  };

  const AddDishToCart = (dish: IDish) => {
    setCart(prevState => {
      let indexDish = prevState.findIndex(dishCart => dishCart.dish === dish);
      if (indexDish === -1) {
        return [...prevState, {dish, amount: 1}];
      } else {
        const cartCopy = [...prevState];
        const copyDishCart = {...cartCopy[indexDish]};
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;
        return [...cartCopy];
      }
    });
  };

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal show={showModal} closeModal={closeModalWindow} title="Order">
          Список sdvsdv
      </Modal>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <DishForm addNewDish={addNewDish} />
          </div>
          <div className="col-4 mb-2">
            <Dishes dishes={dishes} addToCart={AddDishToCart}/>
          </div>
          <div className="col-4 mb-2">
            <Cart cart={cart} />
            <button className="btn btn-primary" onClick={() => setShowModal(!showModal)}>Order</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
