import Link from "next/link";

const header = () => {
  return (
    <div>
      <div className="">
        <ul className=" flex bg-slate-50 p-5">
          <li className=" mr-5 ">
            <h1 className=" text-blue-500 font-black">
              Common Layout Root Pages
            </h1>
          </li>
          <li className=" mr-5 hover:font-bold hover:text-red-500 ">
            <Link href="./login">Login</Link>
          </li>
          <li className=" mr-5 hover:font-bold hover:text-red-500 ">
            <Link href="/">Service</Link>
          </li>
          <li className=" mr-5 hover:font-bold hover:text-red-500 ">
            <Link href="/">Menu</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
