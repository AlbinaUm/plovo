import { useState } from "react";
import { IDish, IDishMutation } from "../../types";
import * as React from "react";

interface Props {
  addNewDish: (dish: IDish) => void;
}

const DishForm: React.FC<Props> = ({ addNewDish }) => {
  const [newDish, setNewDish] = useState<IDishMutation>({
    name: "",
    description: "",
    urlImage: "",
    price: 0,
  });

  const changeDish = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewDish((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDish.name.trim().length === 0 && newDish.description.trim().length) {
      alert("Заполните все поля!");
    } else {
      addNewDish({
        id: String(new Date()),
        ...newDish,
        price: Number(newDish.price),
      });

      setNewDish({
        name: "",
        description: "",
        urlImage: "",
        price: 0,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new dish</h3>
      <div className="form-group mb-2">
        <label htmlFor="name">Title:</label>
        <input
          type="text"
          onChange={changeDish}
          value={newDish.name}
          id="name"
          name="name"
          required
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="description">Description:</label>
        <textarea
          value={newDish.description}
          id="description"
          name="description"
          onChange={changeDish}
          required
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="urlImage">Url image:</label>
        <input
          value={newDish.urlImage}
          type="url"
          id="urlImage"
          name="urlImage"
          onChange={changeDish}
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="price">Price:</label>
        <input
          value={newDish.price}
          onChange={changeDish}
          type="number"
          id="price"
          name="price"
          min={1}
          required
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default DishForm;
