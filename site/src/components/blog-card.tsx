import { Link } from "gatsby";
import React from "react";

interface BlogCardProps {
  title: string;
  subtitle: string;
  slug: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  return (
    <div className="p-4 md:mt-2 border-gray-200 border-b md:border bg-white md:shadow-sm">
      <Link to={props.slug}>
        <h2 className="font-semibold hover:text-blue-700 hover:underline">
          {props.title}
        </h2>
      </Link>
      <p className="text-gray-700"> {props.subtitle}</p>
      {/* <div className="font-medium mt-2">This is a blog card.</div> */}
      <div className="font-display text-xs text-gray-400 text-left mt-2">
        {props.date}
      </div>
    </div>
  );
};

export default BlogCard;
