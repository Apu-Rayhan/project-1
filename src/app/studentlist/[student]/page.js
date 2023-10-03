// "use client";

//* Dynamic Routing in next.js 13

export default function Student({ params }) {
  return (
    <div className="">
      <h1> Student Details </h1>
      <h3>
        Student Name :
        <samp className="mr-5 uppercase hover:font-bold hover:text-red-500">
          {params.student}
        </samp>
      </h3>

      <h1> slojjkldlkdj</h1>
    </div>
  );
}

// const List = () => {
//   return (
//     <div>
//       <div className=""></div>
//     </div>
//   );
// };
