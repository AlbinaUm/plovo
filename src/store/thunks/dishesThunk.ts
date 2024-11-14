import { createAsyncThunk } from '@reduxjs/toolkit';
import { DishesList, IDish } from '../../types';
import axiosApi from '../../axiosAPI.ts';
import { updateCart } from '../slices/cartSlice.ts';

export const fetchAllDishes = createAsyncThunk<IDish[], void>(
  'dishes/fetchAllDishes',
  async (_arg, thunkAPI) => {
    const response: {data: DishesList | null} = await axiosApi('dishes.json');
    const dishesList = response.data;
    console.log(dishesList);

    if (dishesList === null) {
      return [];
    }

    const dishes: DishesList = dishesList;

    const newDishes =  Object.keys(dishesList).map(dish => {
      return {
        ...dishes[dish],
        id: dish
      };
    });

    thunkAPI.dispatch(updateCart(newDishes));
    return newDishes;
  }
);

export const deleteOneDish = createAsyncThunk<void, string>(
  'dishes/deleteOneDish',
  async (dishId: string) => {
    await axiosApi.delete(`dishes/${dishId}.json`);
  }
);