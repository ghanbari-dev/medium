import Link from "next/link";
import React from "react";
import DiscoverCart from "./DiscoverCart";

type Props = {};

const Discover = (props: Props) => {
  const data = [
    "Programming",
    "Data Science",
    "Technology",
    "Self Improvement",
    "Writing",
    "Relationships",
    "Machine Learning",
    "Productivity",
    "Politics",
  ];
  return (
    <div className="lg:float-right lg:w-1/3 lg:mx-16 sticky top-[72px]">
      <div className="border-b">
        <div className="mx-6 md:mx-12 lg:mx-0 py-6 lg:py-10">
          <p className="text-sm font-bold lg:text-xs">
            DISCOVER MORE OF WHAT MATTERS TO YOU
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {data.map((d) => (
              <DiscoverCart text={d} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex text-[#757575] py-6 flex-wrap gap-5">
        <Link href={"/"}>Help</Link>
        <Link href={"/"}>Status</Link>
        <Link href={"/"}>Writers</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Careers</Link>
        <Link href={"/"}>Privacy</Link>
        <Link href={"/"}>Terms</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Text to speech</Link>
      </div>
    </div>
  );
};

export default Discover;
