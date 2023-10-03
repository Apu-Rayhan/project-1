"use client";

//* Dynamic Routing in next.js 13

export default function Student({ params }) {
  return (
    <div className="">
      <h1> Student Details </h1>
      <h3>Student Name : {params.student}</h3>
    </div>
  );
}
