import React from "react";
import Link from "next/link";

const RootPages = () => {
  return (
    <div>
      <h1 className=" text-blue-500 text-4xl font-black">RootPages</h1>
      <div className="">
        <h1 className=""> Next Js App </h1>
        <h1> Mane Pages Root Router </h1>
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RootPages;
