import { IDish } from "../../types";

interface Props {
  dish: IDish;
}

const DishItem: React.FC<Props> = ({ dish }) => {
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
      </div>
    </div>
  );
};

export default DishItem;
