import Image from "next/image";
import Link from "next/link";
import { postCartType } from "../types/postType";

const TrendingCart = ({
  id,
  avatar,
  name,
  company,
  title,
  date,
  time,
  memberOnly,
}: Omit<postCartType, "category" | "image">) => {
  return (
    <div className="flex space-x-4 basis-full md:basis-1/3 lg:basis-1/4 flex-grow">
      <div className="text-[#e6e6e6] text-3xl font-bold">
        {id.toString().padStart(2, "0")}
      </div>
      <div>
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
        <Link href={"/"} className="text-[#292929] font-bold">
          {title}
        </Link>
        <div className="text-[#757575] text-sm">
          {date} . {time} min read
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
      </div>
    </div>
  );
};

export default TrendingCart;
