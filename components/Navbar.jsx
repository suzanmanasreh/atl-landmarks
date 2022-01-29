import React from "react";
import Link from "next/link";
import icon from "../public/gh-icon.png";
import atl from "../public/atl-icon.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-red-800 flex items-center justify-between p-4">
      <div>
        <Link href="/" passHref>
          <a className="text-gray-50 font-bold text-xl sm:text-2xl">
            ATL Civil Rights Landmarks
          </a>
        </Link>
      </div>
      <div className="flex">
        <Link href="https://github.com/suzm10/atl-landmarks" passHref>
          <a>
            <Image src={atl} alt="github" width={40} height={40}></Image>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
