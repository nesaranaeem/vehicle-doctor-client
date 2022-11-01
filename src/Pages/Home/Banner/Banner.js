import React from "react";
import "./Banner.css";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    id: 1,
    next: 2,
    prev: 4,
    img: img1,
  },
  {
    id: 2,
    next: 3,
    prev: 1,
    img: img2,
  },
  {
    id: 3,
    next: 4,
    prev: 2,
    img: img3,
  },
  {
    id: 4,
    next: 1,
    prev: 3,
    img: img4,
  },
];
const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((banner) => (
        <BannerItem key={banner.id} banner={banner}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
