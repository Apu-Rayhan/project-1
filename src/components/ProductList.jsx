// "use client";
import Image from "next/image";
// import { useState, useEffect } from "react";

async function fetchdata() {
  //Call API in Server component in next.js 13.4
  // create server side component and fecth api
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const ProductList = async () => {
  // fetch API data in Client component in next.js 13.4
  // create client side component and fecth api

  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   async function fetchdata() {
  //     let data = await fetch("https://dummyjson.com/products");
  //     data = await data.json();
  //     // console.log(data);
  //     setProduct(data.products);
  //   }
  //   fetchdata();
  // }, []);

  let product = await fetchdata();
  // console.log(product);

  return (
    <div className=" w-10/12 h-auto bg-slate-200 m-auto">
      <div className=" w-full h-16 bg-slate-50 text-center text-2xl pt-4 border-b-2 border-black">
        ProductList
      </div>
      <div className="">
        <div className=" w-full h-screen flex flex-wrap overflow-scroll  ">
          {product.map((item) => (
            <div
              key={item.id}
              className=" w-1/3 h-80 bg-slate-300 m-5 p-5 rounded basis-1/5 "
            >
              <div className=" w-full h-auto">
                <Image
                  src="https://i.dummyjson.com/data/products/1/1.jpg"
                  alt="Description of the image"
                  width={300}
                  height={100}
                  priority={true}
                />
              </div>
              <div className="">
                <h3> id : {item.id}</h3>
                <h3> brand : {item.brand}</h3>
                <h3> title : {item.title}</h3>
                <h3> price : {item.price}</h3>
                <h3> category : {item.category}</h3>
                <h3> rating : {item.rating}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
