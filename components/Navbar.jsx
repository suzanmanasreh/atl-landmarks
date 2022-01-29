import React from "react";
import Link from "next/link";
import icon from "../public/gh-icon.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-red-800 py-4">
      <div className="container mx-auto">
        <div className="mx-2">
          <Link href="/" passHref>
            <a className="text-slate-100 font-bold text-xl sm:text-2xl">
              ATL Civil Rights Landmarks
            </a>
          </Link>
        </div>
        <div className="-mr-2 flex">
          <Image
            src={icon}
            alt="github"
            width={40}
            height={40}
            className="block h-6 w-6"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
