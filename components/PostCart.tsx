import Image from "next/image";
import Link from "next/link";
import React from "react";
import { postCartType } from "../types/postType";

const PostCart = ({
  id,
  avatar,
  name,
  company,
  title,
  date,
  time,
  memberOnly,
  category,
  image
}: postCartType) => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex-grow flex-shrink">
        <div className="text-[#414141] text-sm space-x-2 flex items-start">
          <Link className="h-5 w-5 inline-block" href={"/"}>
            <Image src={avatar} alt="image" width={20} height={20} />
          </Link>
          <div>
            <Link href={"/"}>{name}</Link>
            {company && (
              <>
                <span className="text-[#757575]"> in </span>
                <Link href={"/"}>{company}</Link>
              </>
            )}
          </div>
        </div>
        <h3 className="text-[#292929] font-bold mt-2 md:text-2xl">{title}</h3>
        <p className="hidden md:block mt-2">
          Nican Huehcatlahtolli, a New Futurism
        </p>

        <div className="text-[#757575] text-sm flex justify-between items-center mt-1 md:mt-2">
          <div>
            {date} . {time} min read .
            <span className="px-2 py-[2px] border rounded-full text-[#757575] bg-[#f2f2f2] hover:text-[#292929] hover:bg-[#e6e6e6]">
              {category}
            </span>{" "}
            .
            {memberOnly && (
              <svg
                className="inline-block"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.4 12.77l-1.81 4.99a.63.63 0 0 1-1.18 0l-1.8-4.99a.63.63 0 0 0-.38-.37l-4.99-1.81a.62.62 0 0 1 0-1.18l4.99-1.8a.63.63 0 0 0 .37-.38l1.81-4.99a.63.63 0 0 1 1.18 0l1.8 4.99a.63.63 0 0 0 .38.37l4.99 1.81a.63.63 0 0 1 0 1.18l-4.99 1.8a.63.63 0 0 0-.37.38z"
                  fill="#FFC017"
                ></path>
              </svg>
            )}
          </div>
          <div>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path
                d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                fill="#292929"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[150px] h-[100px] md:w-[200px] md:h-[134px] flex-shrink-0 relative">
        <Image alt="img" src={image} fill object-fit="contain" />
      </div>
    </div>
  );
};

export default PostCart;
