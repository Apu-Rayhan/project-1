"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Home Pages
        </button>
        <div>
          <Link href="/" className="underline">
            HOME Pagesssss
          </Link>
        </div>
      </div>
      <div>
        <h1>registration pages</h1>
      </div>
    </div>
  );
};

export default Registration;
