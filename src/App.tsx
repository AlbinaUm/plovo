import Home from './containers/Home/Home.tsx';
import NewDish from './containers/NewDish/NewDish.tsx';
import { Route, Routes } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout.tsx';
import Order from './containers/Order/Order.tsx';
import EditDish from './containers/EditDish/EditDish.tsx';
import Orders from './containers/Orders/Orders.tsx';
import Layout from './components/Layout/Layout.tsx';

const App = () => {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/newDish" element={<NewDish/>}/>
          <Route path="/editDish/:id" element={<EditDish/>}/>
          <Route path="/checkout" element={<Checkout/>}>
            <Route path="continue" element={<Order/>}/>
          </Route>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
