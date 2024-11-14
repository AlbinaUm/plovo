import DishItem from "./DishItem.tsx";
import * as React from "react";
import { IDish } from "../../types";
interface Props {
  dishes: IDish[];
  deleteDish: (id: string) => void;
}

const Dishes: React.FC<Props> = ({ dishes, deleteDish }) => {
  return (
    <>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish}  onDeleteDish={() => deleteDish(dish.id)} />
      ))}
    </>
  );
};

export default Dishes;
