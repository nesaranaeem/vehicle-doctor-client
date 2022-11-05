import React from "react";
import { Link } from "react-router-dom";

const BannerItem = ({ banner }) => {
  const { id, img, next, prev } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="slider-image">
        <img src={img} alt="" className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 lg:left-24 lg:top-1/4">
        <h1 className="lg:text-6xl text-2xl font-bold text-white">
          Affordable<br></br>
          Price For<br></br>
          Car Servicing
        </h1>
      </div>
      <div className="absolute lg:flex justify-end transform -translate-y-1/2 hidden left-24 top-1/2 w-2/5">
        <p className="text-white text-xl mt-10">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form Car Servicing
        </p>
      </div>
      <div className="absolute flex justify-center bottom-2/4 lg:bottom-0 lg:justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
        <a href="#services" className="btn btn-warning mr-5">
          Services
        </a>
        <Link to="/shop" className="btn btn-outline btn-warning">
          Shop
        </Link>
      </div>
      <div className="absolute flex justify-between lg:justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/2 lg:left-5 lg:right-5 lg:bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
