import React from "react";

function PriceStats({ data, totalResults, updateQueryParams }) {
  return (
    <div className="bg-FCFCFC border border-solid border-DEDBDB hidden px-5 py-4 mb-5 md:flex justify-between items-center">
      <div>
        <span className="block font-euclidcircularb font-bold text-xl leading-26px text-181716 mb-1">
          <span>{totalResults}</span> Results
        </span>
        <div className="font-euclidcircularb text-sm leading-22px text-666666 hidden xl:block">
          <span className="border-r border-666666 pr-3">
            Average Price: <span>{data.avg}</span>
          </span>{" "}
          <span className="border-r border-666666 pr-3 mx-3">
            Most Expensive: <span>{data.max}</span>
          </span>{" "}
          <span>
            Least Expensive: <span>{data.min}</span>
          </span>
        </div>
      </div>
      <div className="sort-button">
        <select
          name="sort-dropdown"
          id="directory-sort"
          className="text-left w-full block cursor-pointer font-euclidcircularb font-bold text-sm leading-20px text-181716 border border-solid border-BABEBD rounded-md py-3 px-4 appearance-none"
          defaultValue=""
          onClick={(e) => updateQueryParams({ sort: e.target.value })}
        >
          <option value="" disabled="disabled">
            Click to sort results
          </option>
          <option className="cursor-pointer" value="price">
            Price (low to high)
          </option>
          <option className="cursor-pointer" value="-price">
            Price (High to low)
          </option>
          <option className="cursor-pointer" value="mileage">
            Mileage
          </option>
        </select>
      </div>
    </div>
  );
}

export default PriceStats;
