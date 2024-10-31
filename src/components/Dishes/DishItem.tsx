import { IDish } from "../../types";
import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  dish: IDish;
  onAddToCart: (dish: IDish) => void;
  onDeleteDish: React.MouseEventHandler;
}

const DishItem: React.FC<Props> = ({ dish, onAddToCart, onDeleteDish }) => {
  let imageUrl =
    "https://www.shutterstock.com/image-vector/not-found-glitch-style-vector-260nw-743166634.jpg";
  const imageStyle = {
    background: `url(${dish.urlImage || imageUrl}) center center/cover no-repeat`,
  };
  return (
    <div className="card mb-3 p-4">
      <div className="row justify-content-between">
        <div className="col-5" style={imageStyle} />
        <div className="col-6">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
          <p className="card-text">Price: {dish.price} SOM</p>
        </div>
        <div className="row justify-content-between row-cols-2">
          <button className="btn btn-primary" onClick={() => onAddToCart(dish)}>Add cart</button>
          <button className="btn btn-danger" onClick={onDeleteDish}>Delete dish</button>
          <NavLink to={`/editDish/${dish.id}`}>Edit</NavLink>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
