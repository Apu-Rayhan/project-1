import React from "react";
import ProductList from "@/components/ProductList";
import UsersList from "@/components/UsersList";
// import getUsers from "@/jsonData/getUsers";

const page = async () => {
  return (
    <div>
      <div className="">
        <h1>Home Page</h1>
      </div>
      <div className="">
        <ProductList />
        <UsersList />
      </div>
    </div>
  );
};

export default page;
