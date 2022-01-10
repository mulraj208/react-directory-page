import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

const TYPE_OF_CARS = [
  {
    key: "new",
    label: "New Cars",
  },
  {
    key: "used",
    label: "Used Cars",
  },
];

function Search({ updateQueryParams }) {
  const [defaultTypeOfCar, setDefaultTypeOfCar] = useState("used");
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    updateQueryParams({ "filter[type]": defaultTypeOfCar });
  }, [defaultTypeOfCar]);

  return (
    <div className="border border-solid border-t-0 rounded mb-6 md:border-none overflow-hidden">
      <div className="mb-5">
        <span className="horizontal-line" />
        <div className="directory-search px-15px py-0 md:p-5 md:border md:border-solid md:border-DEDBDB bg-FCFCFC">
          <form>
            <div className="flex items-center mb-5">
              {TYPE_OF_CARS.map((car) => {
                return (
                  <div key={car.key} className="w-1/2 text-center">
                    <input
                      type="radio"
                      value={car.key}
                      name={car.key}
                      id={car.key}
                      onClick={() => setDefaultTypeOfCar(car.key)}
                      className="hidden"
                    />
                    <label
                      htmlFor={car.key}
                      className={classNames(
                        "cursor-pointer w-full block py-3 font-euclidcircularb text-base leading-140p text-999999 border border-solid rounded-sm border-EBEBEB",
                        {
                          "border-EBEBEB bg-black text-white font-bold":
                            car.key === defaultTypeOfCar,
                        }
                      )}
                    >
                      {car.label}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="zipcode mb-5 relative">
              <input
                type="number"
                placeholder="Enter Zip Code"
                className="w-full h-12 px-5 search-input border border-solid border-EBEBEB rounded-sm"
              />
            </div>
            <div className="mb-5"></div>
            <div className="mb-5"></div>
            <div className="mb-5 pointer-events-none"></div>
            <div>
              <button
                type="submit"
                className="w-full search-button py-3 text-center font-euclidcircularb font-bold text-xl leading-30px text-white"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
