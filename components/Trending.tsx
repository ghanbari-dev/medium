import TrendingCart from "./TrendingCart";

type Props = {};

const Trending = (props: Props) => {
  const data = [
    {
      id: 1,
      image: "",
      name: "Ted Bauer",
      company: "",
      title:
        "University of Idaho Murders: Now It Looks Like John “Jack” Showalter, Right?",
      date: "Dec 6",
      time: "1",
      memberOnly: true,
    },
    {
      id: 2,
      image: "",
      name: "Tom Cooper",
      company: "",
      title: "Ukraine War, 14 December 2022",
      date: "Dec 14",
      time: "7",
    },
    {
      id: 3,
      image: "",
      name: "Arthur Hayes",
      company: "",
      title: "PEMDAS",
      date: "Dec 9",
      time: "15",
    },
    {
      id: 4,
      image: "",
      name: "Tom Whitwell",
      company: "Magnetic Notes",
      title: "52 things I learned in 2022",
      date: "Dec 1",
      time: "6",
    },
    {
      id: 5,
      image: "",
      name: "Diana Malewicz",
      company: "UX Collective",
      title: "2023 visual design trends guide",
      date: "Dec 12",
      time: "7",
      memberOnly: true,
    },
    {
      id: 6,
      image: "",
      name: "Cassie Kozyrkov",
      title: "Introducing ChatGPT!",
      date: "Dec 8",
      time: "6",
      memberOnly: true,
    },
  ];

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
          {data.map((d) => (
            <TrendingCart
              key={d.id}
              {...d}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
