import React from "react";
import CarCard from "./CarCard";

function CarCardList({ cars }) {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:justify-between xl:justify-start">
      {cars.map((car) => (
        <CarCard key={car.id} carData={car} />
      ))}
    </div>
  );
}

export default CarCardList;
