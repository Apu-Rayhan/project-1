"use client";
import React from "react";

import Link from "next/link";

//* Dynamic Routing in next.js 13

const data = ["opu", "rayhan"];

const StudentList = () => {
  console.log(data);
  return (
    <div className="">
      <h1 className=" font-bold text-lg  text-red-950">Student List</h1>
      <div className="">
        <ul>
          {data.map((item) => (
            <li key={item}>
              <Link href={`/studentlist/${item}`}>Student - {item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
