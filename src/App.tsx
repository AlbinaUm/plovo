import ToolBar from "./components/ToolBar/ToolBar.tsx";
import { useCallback, useEffect, useState } from 'react';
import { DishCart, DishesList, IDish } from './types';
import Home from './containers/Home/Home.tsx';
import NewDish from './containers/NewDish/NewDish.tsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout.tsx';
import Order from './containers/Order/Order.tsx';
import axiosApi from './axiosAPI.ts';
import EditDish from './containers/EditDish/EditDish.tsx';


const App = () => {
  const [cart, setCart] = useState<DishCart[]>([]);
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  const fetchDishes = useCallback(async () => {
    try {
      setLoading(true);
      const reponseDishes: {data: DishesList | null} = await axiosApi('dishes.json');
      const dishesList = reponseDishes.data;
      console.log(dishesList);

      if (dishesList === null) {
        setDishes([]);
        return;
      }

      const dishes: DishesList = dishesList;

      const dishesInMyFormat = Object.keys(dishesList).map(dish => {
        return {
          ...dishes[dish],
          id: dish
        };
      })

      setDishes(dishesInMyFormat);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }

  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchDishes();
    }
  }, [fetchDishes, location.pathname]);

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
            <Route path="/" element={<Home fetchDishes={fetchDishes} dishes={dishes} AddDishToCart={AddDishToCart} cart={cart} isLoadingDishes={loading}/>}/>
            <Route path="/newDish" element={<NewDish />}/>
            <Route path="/editDish/:id" element={<EditDish />}/>
            <Route path="/checkout" element={<Checkout cart={cart}/>}>
              <Route path="continue" element={<Order cart={cart}/>} />
            </Route>
            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
