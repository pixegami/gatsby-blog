import { Link } from "gatsby";
import React from "react";

interface BlogCardProps {
  title: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  return (
    <div className="p-4 md:mt-2 border-gray-200 border-b md:border bg-white md:shadow-sm">
      <Link to={props.slug}>
        <h2 className="text-lg font-semibold hover:text-blue-700 hover:underline">
          {props.title}
        </h2>
      </Link>
      {/* <div className="font-medium mt-2">This is a blog card.</div> */}
      <div className="font-semibold text-sm text-gray-400">04/06/2019</div>
    </div>
  );
};

export default BlogCard;
