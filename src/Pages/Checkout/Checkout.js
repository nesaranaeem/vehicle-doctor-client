import React, { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phoneNumber = form.phoneNumber.value;
    const email = user?.email || "Guest";

    const notes = form.notes.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      phoneNumber: phoneNumber,
      notes: notes,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          toast("YAY! Order Placed!!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h4 className="text-4xl">{title}</h4>
        <h4 className="text-3xl">{price}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-warning w-full"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-warning w-full"
          />
          <input
            name="phoneNumber"
            type="phone"
            placeholder="Your Phone"
            className="input input-bordered input-warning w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered input-warning w-full"
            readOnly
          />
        </div>
        <textarea
          name="notes"
          className="textarea textarea-warning w-full my-4"
          placeholder="Notes"
        ></textarea>
        <input type="submit" className="btn" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
