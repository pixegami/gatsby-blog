import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import "../style/post.css";

interface BlogPostProps extends PageProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const BlogPost: React.FC<BlogPostProps> = (props) => {
  console.log(props);
  const post = props.data.markdownRemark;
  return (
    <Layout>
      <h1 className="text-lg p-4 pt-2 pb-2 md:pt-4 md:pb-4 md:text-2xl bg-gradient-to-r from-red-700 via-indigo-700 to-blue-700 text-white">
        {post.frontmatter.title}
      </h1>
      <div className="p-4 border-gray-200 border bg-white shadow-sm">
        <div className="blog-post">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
