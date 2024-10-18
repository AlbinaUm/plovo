import ToolBar from "./components/ToolBar/ToolBar.tsx";
import { useState } from "react";
import { DishCart, IDish } from './types';
import Home from './containers/Home/Home.tsx';
import NewDish from './containers/NewDish/NewDish.tsx';
import { Route, Routes } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout.tsx';
import Order from './containers/Order/Order.tsx';

const App = () => {
  const [cart, setCart] = useState<DishCart[]>([]);
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

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home dishes={dishes} AddDishToCart={AddDishToCart} cart={cart}/>}/>
            <Route path="/newDish" element={<NewDish addNewDish={addNewDish}/>}/>
            <Route path="/checkout" element={<Checkout cart={cart}/>}>
              <Route path="continue" element={<Order/>} />
            </Route>
            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
