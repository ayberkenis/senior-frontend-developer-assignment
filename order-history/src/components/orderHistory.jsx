import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SingleOrder from "./singleOrder";


const OrderHistory = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://dummyjson.com/carts/15')
      .then(res => res.json())
      .then(data => {
        props.dispatch({
          type: 'orders/add',
          payload: data.products,
        });
        setOrders(data.products);
        setLoading(false);
      });
  }, []);
  const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="flex flex-col justify-between items-center gap-4 bg-zinc-200 rounded-lg p-8 w-full">
      <h1 className="font-bold text-2xl">Order History</h1>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row justify-between items-center">
        {loading ? (
            // Display a "Loading..." message while fetching data
            <h1 className='italic animate-pulse'>Loading...</h1>
          ) : (
        <table className="table-auto rounded-lg border-2 border-black">
        <thead className='border-2 border-black'>
           <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Total Price</th>
            <th className="px-4 py-2">Status</th>
        </thead>
        <tbody className='bg-zinc-100 even:bg-zinc-200 odd:bg-zinc-300'>


          {sortedOrders ? sortedOrders.map((order, index) => (
            
            <SingleOrder key={index} order={order} />
          ))
          
          :
          
          <h1>No orders found</h1>}
        </tbody>
      </table>
          )}
      
    </div>
    </div>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders, 
  };
};

export default connect(mapStateToProps)(OrderHistory);
