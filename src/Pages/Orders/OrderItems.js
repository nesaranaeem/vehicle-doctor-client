import React, { useEffect, useState } from "react";
const OrderItems = ({ order, handleDelete, handleOrderStatus }) => {
  const {
    _id,
    serviceName,
    price,
    email,
    customer,
    phoneNumber,
    service,
    status,
  } = order;
  const [serviceDetails, setServiceDetails] = useState({});
  const { img } = serviceDetails;

  useEffect(() => {
    fetch(`http://localhost:5000/service/${service}`)
      .then((res) => res.json())
      .then((result) => setServiceDetails(result));
  }, [service]);
  return (
    <tr>
      <th>
        <label>
          <button
            className="btn btn-circle btn-outline"
            onClick={() => handleDelete(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-full w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{phoneNumber}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>${price}</td>
      <th>
        <button
          onClick={() => handleOrderStatus(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderItems;
