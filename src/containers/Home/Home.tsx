import Dishes from '../../components/Dishes/Dishes.tsx';
import Cart from '../../components/Cart/Cart.tsx';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectDishes, selectFetchDishesLoading } from '../../store/slices/dishesSlice.ts';
import { deleteOneDish, fetchAllDishes } from '../../store/thunks/dishesThunk.ts';


const Home = () => {
  const isLoadingDishes = useAppSelector(selectFetchDishesLoading);
  const dishes = useAppSelector(selectDishes);
  const dispatch = useAppDispatch();

  const fetchDishes = useCallback(async () => {
    await dispatch(fetchAllDishes());
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchDishes();
    }
  }, [fetchDishes, location.pathname]);


  const deleteDish = useCallback(async (id: string) => {
    await dispatch(deleteOneDish(id));
    await fetchDishes();
  }, [fetchDishes]);


  return (
    <>
      {isLoadingDishes ? <Spinner/> :
        <div className="row justify-content-between">
          <div className="col col-md-5 mb-2">
            {dishes.length > 0 ?
              <Dishes dishes={dishes} deleteDish={deleteDish}/>
              : <p>Not dishes yet</p>
            }
          </div>
          <div className="col col-md-5 mb-2">
            <Cart/>
          </div>
        </div>
      }
    </>
  );
};

export default Home;