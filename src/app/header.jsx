//* Create Globale Header
import Logo from "@/components/Logo";
import Link from "next/link";

export default function header() {
  return (
    <div>
      <div className=" bg-slate-50 w-full h-auto  flex ">
        <Logo />
        <div className=" w-auto m-auto bg-slate-200 ">
          <ul className=" flex p-5 justify-center">
            <Nav name="Home" path="./home" />
            <Nav name="Login" path="./login" />
            <Nav name="Service" path="./service" />
            <Nav name="Menu" path="./menu" />
          </ul>
        </div>
      </div>
    </div>
  );
}

const Nav = (props) => {
  return (
    <li className=" mr-5 hover:font-bold hover:text-red-500 ">
      <Link href={props.path}>{props.name}</Link>
    </li>
  );
};
