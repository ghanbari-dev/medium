import { useEffect, useState } from "react";
import { postCartType } from "../types/postType";
import PostCart from "./PostCart";

const Posts = () => {
  const [posts, setPosts] = useState<postCartType[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((res) => res.json())
      .then((result) => setPosts(result));
  }, []);

  return (
    <div>
      <div className="mx-6 md:mx-12 lg:mx-16 py-10 flex flex-col gap-12">
        {posts.map((post) => (
          <PostCart key={post.id} {...post} />
        ))}
      </div>
      <div className="text-sm mb-10 lg:hidden">
        <button className="mx-auto block px-4 py-2 border rounded-full text-[#757575] border-[#757575] hover:text-[#292929] hover:border-[#292929]">
          Load more stories
        </button>
      </div>
    </div>
  );
};

export default Posts;
