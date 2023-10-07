import React from "react";
import ProductList from "@/components/ProductList";

const page = () => {
  return (
    <div>
      <div className="">
        <h1>Home Page</h1>
      </div>
      <div className="">
        <ProductList />
      </div>
    </div>
  );
};

export default page;
