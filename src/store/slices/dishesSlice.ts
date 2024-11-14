import {  IDish } from '../../types';
import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteOneDish, fetchAllDishes } from '../thunks/dishesThunk.ts';
import { RootState } from '../../app/store.ts';

interface DishesState {
  dishes: IDish[];
  isFetchLoading: boolean;
  isDeleteLoading: boolean | string;
}

const initialState: DishesState = {
  dishes: [],
  isFetchLoading: false,
  isDeleteLoading: false,
};

export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectFetchDishesLoading = (state: RootState) => state.dishes.isFetchLoading;


export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDishes.pending, state => {
        state.isFetchLoading = true;
      })
      .addCase(fetchAllDishes.fulfilled, (state, action: PayloadAction<IDish[]>) => {
        state.dishes = action.payload;
        state.isFetchLoading = false;
      })
      .addCase(fetchAllDishes.rejected, state => {
        state.isFetchLoading = false;
      })
      .addCase(deleteOneDish.pending, (state, {meta}) => {
        state.isDeleteLoading = meta.arg;
      })
      .addCase(deleteOneDish.fulfilled, (state) => {
        state.isDeleteLoading = false;
      })
      .addCase(deleteOneDish.rejected, state => {
        state.isDeleteLoading = false;
      })
    ;
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;

