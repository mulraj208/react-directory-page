import React from "react";

function CarCard({ carData }) {
  return (
    <div className="car-card font-euclidcircularb border border-solid bg-white mb-5 xl:mb-30px">
      <a href={carData.url} target="_blank" rel="noopener noreferrer nofollow">
        <div className="relative">
          <div
            className="lozad car-img rounded px-4 pt-4 md:p-0 md:rounded-b-none"
            data-loaded="true"
            style={{ backgroundImage: `url('${carData.image}')` }}
          />
          <button className="hidden photos-button absolute bottom-12 left-24 flex items-center rounded px-9px py-6px cursor-pointer md:left-8px md:bottom-8px">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12.3325 0.666687H1.66585C0.93052 0.666687 0.33252 1.26469 0.33252 2.00002V10C0.33252 10.7354 0.93052 11.3334 1.66585 11.3334H12.3325C13.0679 11.3334 13.6659 10.7354 13.6659 10V2.00002C13.6659 1.26469 13.0679 0.666687 12.3325 0.666687ZM3.33252 2.66669C3.59774 2.66669 3.85209 2.77204 4.03963 2.95958C4.22716 3.14712 4.33252 3.40147 4.33252 3.66669C4.33252 3.9319 4.22716 4.18626 4.03963 4.37379C3.85209 4.56133 3.59774 4.66669 3.33252 4.66669C3.0673 4.66669 2.81295 4.56133 2.62541 4.37379C2.43788 4.18626 2.33252 3.9319 2.33252 3.66669C2.33252 3.40147 2.43788 3.14712 2.62541 2.95958C2.81295 2.77204 3.0673 2.66669 3.33252 2.66669ZM6.99919 9.33335H2.33252L4.99919 6.00002L5.99919 7.33335L7.99919 4.66669L11.6659 9.33335H6.99919Z"
                fill="white"
              />
            </svg>
            <span className="font-work-sans font-semibold text-10px leading-4 text-white">
              (06)
            </span>
          </button>
        </div>
        <div className="px-4 pt-2 pb-18px md:p-3">
          <div className="flex items-center mb-3">
            <h2 className="car-title mr-3 font-bold text-lg leading-32px text-333333 md:leading-26px">
              {carData.name}
            </h2>
          </div>
          <div className="flex justify-between items-center mb-10px">
            <div>
              <span className="font-bold block text-xl leading-24px text-333333 mr-2 mb-1">
                {carData.price}
              </span>{" "}
              <span className="text-sm block font-normal leading-24px text-333333">
                {carData.miles}
              </span>
            </div>
            <div className="flex flex-col items-end" />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-normal text-sm leading-26px text-333333">
              {carData.dealer_name}
            </span>{" "}
            <span className="font-normal text-xs leading-26px text-666666 pl-2">
              {carData.city}
              <span>,</span> {carData.state}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CarCard;
