// App.js

import './App.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import OrderSummary from './components/OrderSummary';
import OrderDetails from './components/OrderDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from './redux/orderSlice';


function App() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        dispatch(setOrders(data));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchOrders();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {orders.length > 0
        && <Breadcrumb />
      }
      <OrderSummary />
      <OrderDetails order={orders[0]}></OrderDetails>
    </div>
  );
}

export default App;
