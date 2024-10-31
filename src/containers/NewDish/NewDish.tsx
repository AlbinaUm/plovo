import DishForm from '../../components/DishForm/DishForm.tsx';
import * as React from 'react';
import { ApiDish } from '../../types';
import axiosApi from '../../axiosAPI.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';

interface Props {
}

const NewDish: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addNewDish = async (dish: ApiDish) => {
    try {
      setLoading(true);
      await axiosApi.post('dishes.json', dish);
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-2">
      {loading ? <Spinner/> :
        <DishForm addNewDish={addNewDish}/>
      }
    </div>
  );
};

export default NewDish;