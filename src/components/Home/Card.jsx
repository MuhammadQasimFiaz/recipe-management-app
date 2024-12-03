import React from "react";

function Card({ img, title, btnTxt, navigate }) {
  return (
    <div className="max-w-sm border rounded-lg shadow bg-gray-800 bg-opacity-25 backdrop-blur-sm border-gray-700 p-5">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="pt-5 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white capitalize">
            {title}
          </h5>
        <button
          onClick={navigate}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          {btnTxt}
        </button>
      </div>
    </div>
  );
}

export default Card;
