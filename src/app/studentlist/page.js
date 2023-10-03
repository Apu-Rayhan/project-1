"use client";
import React from "react";

import Link from "next/link";

//* Dynamic Routing in next.js 13

const data = ["opu", "rayhan"];

const StudentList = ({ params }) => {
  // console.log(data);
  return (
    <div className="">
      <h1 className=" font-bold text-lg  text-red-950">Student List</h1>
      <div className="">
        <ul className="">
          {data.map((item) => (
            <li key={item}>
              <Link href={`/studentlist/${item}`} className="mr-5 capitalize ">
                Student Name -
                <span className="mr-5 uppercase hover:font-bold hover:text-red-500">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
