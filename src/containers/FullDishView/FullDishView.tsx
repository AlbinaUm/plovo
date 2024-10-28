import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axiosApi from '../../axiosAPI.ts';
import { IOrderAPI } from '../../types';


const FullDishView = () => {

  const params = useParams();

  useEffect(() => {
    console.log(params);
    axiosApi.get<IOrderAPI>('orders/' + params.dishId + '.json');
  }, [params.dishId]);


  return (
    <div>
      Info about one dish
    </div>
  );
};

export default FullDishView;