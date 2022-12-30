import Link from "next/link";
import React from "react";
import { discoverCartType } from "../types/discoverType";


const DiscoverCart = ({ text }: discoverCartType) => {
  return (
    <Link href={"/"} className="py-2 px-4 border border-[#e6e6e6] rounded text-[#757575]">
      {text}
    </Link>
  );
};

export default DiscoverCart;
