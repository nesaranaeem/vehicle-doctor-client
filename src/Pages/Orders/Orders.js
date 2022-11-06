import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import OrderItems from "./OrderItems";
import { Helmet } from "react-helmet";
const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("vehicle-doctor-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  const handleDelete = (id) => {
    const proceed = window.confirm(`are you sure you want to remove?`);
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            toast(` Your order is deleted from the list`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleOrderStatus = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Orders</title>
      </Helmet>
      <h3 className="my-4 text-center">Total {orders.length} orders</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Items</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td className="p-6">No orders made yet</td>
              </tr>
            ) : (
              orders.map((order) => (
                <OrderItems
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                  handleOrderStatus={handleOrderStatus}
                ></OrderItems>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
