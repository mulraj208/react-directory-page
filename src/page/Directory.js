import React, { useMemo, useEffect, useState } from "react";
import Search from "../components/directory-page/Search";
import PriceStats from "../components/directory-page/PriceStats";
import Pagination from "../components/directory-page/Pagination";
import CarCardList from "../components/directory-page/CarCardList";
import { formatNumberWithCommas } from '../utils';
import "../scss/directory-page.scss";

const API_URL =
  "http://directory-api-staging.testingpe.com/api/wheels-directory/v1/deals";

function Directory() {
  const [cars, setCars] = useState([]);
  const [priceStats, setPriceStats] = useState({});
  const [meta, setMeta] = useState({});
  const totalResults = useMemo(() => {
    return meta && meta.total
      ? formatNumberWithCommas(meta.total)
      : "";
  }, [meta]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        const { data, price_stats, meta } = res;
        console.log(res);
        setCars(data);
        setPriceStats(price_stats);
        setMeta(meta);
      })
      .catch((err) => console.error(err));
  }, []);

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
          <PriceStats data={priceStats} totalResults={totalResults} />
          <CarCardList {...{ cars }} />
          <Pagination meta={meta} />
        </div>
      </div>
    </div>
  );
}

export default Directory;
