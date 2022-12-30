import Link from "next/link";
import React, { useEffect, useState } from "react";
import DiscoverCart from "./DiscoverCart";

const Discover = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/tags")
      .then((res) => res.json())
      .then((result) => setTags(result));
  }, []);

  return (
    <div className="lg:float-right lg:w-1/3 lg:mx-16 lg:sticky lg:top-[72px]">
      <div className="border-b">
        <div className="mx-6 md:mx-12 lg:mx-0 py-6 lg:py-10">
          <p className="text-sm font-bold lg:text-xs">
            DISCOVER MORE OF WHAT MATTERS TO YOU
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <DiscoverCart key={index} text={tag} />
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
