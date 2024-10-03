import DishItem from "./DishItem.tsx";
import * as React from "react";
import { IDish } from "../../types";
interface Props {
  dishes: IDish[];
}

const Dishes: React.FC<Props> = ({ dishes }) => {
  return (
    <>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} />
      ))}
    </>
  );
};

export default Dishes;
