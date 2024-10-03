import ToolBar from "./components/ToolBar/ToolBar.tsx";
import DishForm from "./components/DishForm/DishForm.tsx";
import Cart from "./components/Cart/Cart.tsx";
import Dishes from "./components/Dishes/Dishes.tsx";
import { useState } from "react";
import { IDish } from "./types";

const App = () => {
  const [dishes, setDishes] = useState<IDish[]>([
    {
      id: "1",
      name: "Plov",
      description: "taste",
      price: 200,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
    {
      id: "1",
      name: "Pizza",
      description: "cheese",
      price: 500,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
    {
      id: "1",
      name: "Shaurma",
      description: "---",
      price: 250,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
  ]);

  const addNewDish = (newDish: IDish) => {
    setDishes((prevState) => [...prevState, newDish]);
  };
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <DishForm addNewDish={addNewDish} />
          </div>
          <div className="col-4 mb-2">
            <Dishes dishes={dishes} />
          </div>
          <div className="col-4 mb-2">
            <Cart />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
