import React from "react";
import { formatNumberWithCommas } from '../../utils';

function Pagination({ meta }) {
  const { current_page = '', last_page = '' } = meta;

  return (
    <div className="font-euclidcircularb pagination flex justify-between items-center mb-8">
      <button className="flex items-center cursor-pointer pointer-events-none">
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.71006 12.2959C9.09895 12.688 9.0963 13.3212 8.70414 13.7101C8.31199 14.0989 7.67883 14.0963 7.28994 13.7041L8.71006 12.2959ZM2 6.94958L1.28994 7.65372L0.585774 6.94364L1.29588 6.2395L2 6.94958ZM7.29588 0.289916C7.68805 -0.0989571 8.32121 -0.0962858 8.71008 0.295883C9.09896 0.688051 9.09628 1.32121 8.70412 1.71008L7.29588 0.289916ZM7.28994 13.7041L1.28994 7.65372L2.71006 6.24544L8.71006 12.2959L7.28994 13.7041ZM1.29588 6.2395L7.29588 0.289916L8.70412 1.71008L2.70412 7.65966L1.29588 6.2395Z"
            fill="#999999"
          ></path>
        </svg>
        <span className="ml-3 text-sm leading-9 text-333333 text-666666">
          Previous
        </span>
      </button>
      <span className="ml-3 text-sm leading-9 text-666666">
        {formatNumberWithCommas(current_page)} of {formatNumberWithCommas(last_page)}
      </span>
      <button className="flex items-center cursor-pointer">
        <span className="mx-3 text-sm leading-9 text-333333">Next</span>
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            d="M8.71006 12.2959C9.09895 12.688 9.0963 13.3212 8.70414 13.7101C8.31199 14.0989 7.67883 14.0963 7.28994 13.7041L8.71006 12.2959ZM2 6.94958L1.28994 7.65372L0.585774 6.94364L1.29588 6.2395L2 6.94958ZM7.29588 0.289916C7.68805 -0.0989571 8.32121 -0.0962858 8.71008 0.295883C9.09896 0.688051 9.09628 1.32121 8.70412 1.71008L7.29588 0.289916ZM7.28994 13.7041L1.28994 7.65372L2.71006 6.24544L8.71006 12.2959L7.28994 13.7041ZM1.29588 6.2395L7.29588 0.289916L8.70412 1.71008L2.70412 7.65966L1.29588 6.2395Z"
            fill="#999999"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
