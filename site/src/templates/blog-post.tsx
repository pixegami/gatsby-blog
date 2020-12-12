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
      <div className="blog-post mt-2 p-4 border-gray-200 border bg-white shadow-sm">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default BlogPost;
