//* Create Globale Header
import Logo from "@/components/Logo";
import Link from "next/link";

const header = () => {
  return (
    <>
      <div className=" bg-slate-50 w-full h-auto  flex ">
        <Logo />
        <div className=" w-1/4 m-auto bg-slate-200 ">
          <ul className=" flex p-5 justify-center">
            <li className=" mr-5 "></li>
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
    </>
  );
};

export default header;
