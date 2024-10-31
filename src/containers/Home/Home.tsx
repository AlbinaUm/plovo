import Dishes from '../../components/Dishes/Dishes.tsx';
import Cart from '../../components/Cart/Cart.tsx';
import { DishCart, IDish } from '../../types';
import * as React from 'react';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import axiosApi from '../../axiosAPI.ts';
import { useCallback } from 'react';


interface  Props {
  dishes: IDish[];
  AddDishToCart: (dish: IDish) => void;
  cart: DishCart[];
  isLoadingDishes?: boolean;
  fetchDishes: () => void;
}

const Home: React.FC<Props> = ({dishes, AddDishToCart, cart, isLoadingDishes = false, fetchDishes}) => {

  const deleteDish = useCallback(async (id: string) => {
    try {
      if (window.confirm('Do you want to remove the dish?')) {
        await axiosApi.delete(`dishes/${id}.json`);
        await fetchDishes();
      }
    } catch (e) {
      console.error(e);
    }
  }, [fetchDishes]);


  return (
    <>
      {isLoadingDishes ? <Spinner/> :
        <div className="row justify-content-between">
          <div className="col col-md-5 mb-2">
            {dishes.length > 0 ?
              <Dishes dishes={dishes} addToCart={AddDishToCart} deleteDish={deleteDish}/>
              : <p>Not dishes yet</p>
            }
          </div>
          <div className="col col-md-5 mb-2">
            <Cart cart={cart}/>
          </div>
        </div>
      }
    </>
  );
};

export default Home;