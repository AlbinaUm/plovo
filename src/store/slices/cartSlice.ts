import { DishCart, IDish } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';


interface CartState {
  cartDishes: DishCart[];
}

const initialState: CartState = {
  cartDishes: []
};

export const selectCartDishes = (state: RootState) => state.cart.cartDishes;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDish: (state, {payload: dish}: PayloadAction<IDish>) => {

      let indexDish = state.cartDishes.findIndex(dishCart => dishCart.dish.id === dish.id);

      if (indexDish === -1) {
        state.cartDishes = [...state.cartDishes, {dish, amount: 1}];
      } else {
        const cartCopy = [...state.cartDishes];
        const copyDishCart = {...cartCopy[indexDish]};
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;
        state.cartDishes = [...cartCopy];
      }
    },
    clearCart: (state) => {
      state.cartDishes = [];
    },
    updateCart: (state, {payload: dishes}: PayloadAction<IDish[]>) => {
      state.cartDishes = state.cartDishes.map((cartDish) => {
        const updateDish = dishes.find(d => d.id === cartDish.dish.id);

        if (updateDish) {
          return {
            ...cartDish,
            dish: updateDish
          }
        }

        return cartDish;
      });
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const {addDish, clearCart, updateCart} = cartSlice.actions;