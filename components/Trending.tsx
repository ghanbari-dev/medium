import { useEffect, useState } from "react";
import { postCartType } from "../types/postType";
import TrendingCart from "./TrendingCart";

const Trending = () => {
  const [trends, setTrends] = useState<Omit<postCartType, "category">[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/trends")
      .then((res) => res.json())
      .then((result) => setTrends(result));
  }, []);

  return (
    <div className="border-b">
      <div className="py-10 mx-6 md:mx-12 lg:mx-16">
        <div className="flex items-center space-x-2">
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
            <path fill="#fff" d="M0 .8h28v28H0z"></path>
            <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
              <path fill="#fff" d="M4 4.8h20v20H4z"></path>
              <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
              <path
                d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                stroke="#000"
                strokeLinecap="round"
              ></path>
            </g>
            <defs>
              <clipPath id="trending_svg__clip0">
                <path
                  fill="#fff"
                  transform="translate(4 4.8)"
                  d="M0 0h20v20H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
          <p className="text-xs font-bold">TRENDING ON MEDIUM</p>
        </div>
        <div className="flex flex-row flex-wrap gap-6">
          {trends.map((trend) => (
            <TrendingCart
              key={trend.id}
              {...trend}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
