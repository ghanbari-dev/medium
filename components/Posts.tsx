import PostCart from "./PostCart";

type Props = {};

const Posts = (props: Props) => {
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
      category:"data"
    },
    {
      id: 2,
      image: "",
      name: "Tom Cooper",
      company: "",
      title: "Ukraine War, 14 December 2022",
      date: "Dec 14",
      time: "7",
      category:"data"
    },
    {
      id: 3,
      image: "",
      name: "Arthur Hayes",
      company: "",
      title: "PEMDAS",
      date: "Dec 9",
      time: "15",
      category:"data"
    },
    {
      id: 4,
      image: "",
      name: "Tom Whitwell",
      company: "Magnetic Notes",
      title: "52 things I learned in 2022",
      date: "Dec 1",
      time: "6",
      category:"data"
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
      category:"data"
    },
    {
      id: 6,
      image: "",
      name: "Cassie Kozyrkov",
      title: "Introducing ChatGPT!",
      date: "Dec 8",
      time: "6",
      memberOnly: true,
      category:"data"
    },
  ];

  return (
    <div>
      <div className="mx-6 md:mx-12 lg:mx-16 py-10 flex flex-col gap-12">
        {data.map(d => 
          <PostCart key={d.id} {...d} />
          )}
      </div>
      <div className="text-sm mb-10 lg:hidden"><button className="mx-auto block px-4 py-2 border rounded-full text-[#757575] border-[#757575] hover:text-[#292929] hover:border-[#292929]">Load more stories</button></div>
    </div>
  );
};

export default Posts;
