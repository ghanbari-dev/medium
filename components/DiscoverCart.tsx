import Link from "next/link";
import React from "react";

type Props = {
  text: string;
};

const DiscoverCart = ({ text }: Props) => {
  return (
    <Link href={"/"} className="py-2 px-4 border border-[#e6e6e6] rounded text-[#757575]">
      {text}
    </Link>
  );
};

export default DiscoverCart;
