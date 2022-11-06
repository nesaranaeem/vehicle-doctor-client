import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/Home/Services/ServiceCard";
import { Helmet } from "react-helmet";
const Shop = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  // const perPage = 3;
  const pages = Math.ceil(count / pageSize);
  useEffect(() => {
    fetch(
      `https://vehicle-doctor-server.vercel.app/shop?page=${currentPage}&size=${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        setCount(data.count);
        // console.log(data.count);
      })
      .catch((err) => console.error(err));
  }, [currentPage, pageSize]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
      </Helmet>
      <div className="grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="grid justify-items-center">
        <div className="btn-group py-5">
          {[...Array(pages).keys()].map((number) => (
            <button
              onClick={() => setCurrentPage(number)}
              key={number}
              className={currentPage === number ? "btn btn-active" : "btn"}
            >
              {number + 1}
            </button>
          ))}
          <select
            className="select select-warning ml-5"
            onChange={(e) => setPageSize(e.target.value)}
          >
            <option value="3" selected>
              3
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Shop;
