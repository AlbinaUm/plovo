import DishItem from "./DishItem.tsx";
import * as React from "react";
import { IDish } from "../../types";
interface Props {
  dishes: IDish[];
  addToCart: (dish: IDish) => void;
  deleteDish: (id: string) => void;
}

const Dishes: React.FC<Props> = ({ dishes, addToCart, deleteDish }) => {
  return (
    <>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} onAddToCart={addToCart} onDeleteDish={() => deleteDish(dish.id)} />
      ))}
    </>
  );
};

export default Dishes;
