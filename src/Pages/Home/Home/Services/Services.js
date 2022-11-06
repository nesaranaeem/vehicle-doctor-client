import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://vehicle-doctor-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div id="services">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Service</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br></br> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
