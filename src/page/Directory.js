import React from "react";
import CarCard from "../components/directory-page/CarCard";
import Search from "../components/directory-page/Search";
import Results from "../components/directory-page/Results";
import Pagination from "../components/directory-page/Pagination";
import "../scss/directory-page.scss";

function Directory() {
  const cards = Array(10).fill(undefined);

  return (
    <div id="directory-page">
      <h1 className="font-euclidcircularb font-bold text-2xl leading-32px text-black mt-2 mb-4 whitespace-normal md:mt-2 md:mb-6 md:text-32px md:leading-40px px-15px">
        Used Cars For Sale
      </h1>

      <div className="flex flex-col md:flex-row font-euclidcircularb px-15px">
        <div className="left-rail mb-5 md:mb-0">
          <Search />
        </div>
        <div className="right-rail">
          <Results />
          <div className="flex flex-col md:flex-row md:flex-wrap lg:justify-between xl:justify-start">
            {cards.map((item, index) => (
              <CarCard key={index} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Directory;
