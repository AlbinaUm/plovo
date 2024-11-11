import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';
import { IOrder, IOrdersAPI } from '../../types';


const Orders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const fetchData = useCallback(async () => {
    const response = await axiosApi<IOrdersAPI | null>('orders.json');
    const ordersResponse = response.data;

    if (!ordersResponse) {
      return setOrders([]);
    }

    const ordersList: IOrder[] = Object.keys(ordersResponse).map(orderId => {
      const order = {...ordersResponse[orderId]};

      const totalPrice = order.dishes.reduce((acc, dish ) => {
        acc += dish.amount * dish.dish.price;
        return acc;
      }, 0);

      return {
        id: orderId,
        ...order,
        totalPrice,
      }
    });

    setOrders(ordersList.reverse());
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      {orders.length > 0 ?
        <>
          {orders.map((order) => (
            <div key={order.id} className="card mb-4 p-3">
              <p className="m-0"><strong>{order.customer.name}</strong>: total orders cost is <strong>{order.totalPrice}</strong></p>
            </div>
          ))}
        </>
        :
        <p>No orders yet</p>
      }
    </>
  );
};

export default Orders;