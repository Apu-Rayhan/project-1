"use client";
import React, { useState } from "react";

export const Btn = ({ price, btnName }) => {
  return (
    <button
      onClick={() => {
        alert(price);
      }}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      {btnName}
    </button>
  );
};

export const ChangeBtn = ({ name }) => {
  return (
    <div className="">
      <button
        onClick={() => {
          alert("hi");
        }}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {name}
      </button>
    </div>
  );
};
