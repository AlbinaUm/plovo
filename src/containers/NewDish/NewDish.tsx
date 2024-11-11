import DishForm from '../../components/DishForm/DishForm.tsx';
import * as React from 'react';
import { ApiDish } from '../../types';
import axiosApi from '../../axiosAPI.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface Props {
}

const NewDish: React.FC<Props> = () => {
  const [addLoading, setAddLoading] = useState(false);
  const navigate = useNavigate();

  const addNewDish = async (dish: ApiDish) => {
    try {
      setAddLoading(true);
      await axiosApi.post('dishes.json', dish);
      navigate('/');
      toast.success("Dish was added successfully!");
    } catch (e) {
      console.error(e);
    } finally {
      setAddLoading(false);
    }
  };

  return (
    <div className="mb-2">
      <DishForm addNewDish={addNewDish} isLoading={addLoading}/>
    </div>
  );
};

export default NewDish;