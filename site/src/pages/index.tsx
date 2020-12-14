import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import BlogCard from "../components/blog-card";
import Layout from "../components/layout";
import "../style/index.css";

interface IndexPageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: Array<FileNode>;
    };
  };
}

interface FileNode {
  node: {
    excerpt: string;
    html: string;
    rawMarkdownBody: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
    };
    timeToRead: string;
    id: string;
  };
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          html
          rawMarkdownBody
          frontmatter {
            date
            title
          }
          timeToRead
          id
          excerpt
        }
      }
    }
  }
`;

const Index: React.FC<IndexPageProps> = (props) => {
  console.log(props);
  return (
    <Layout>
      <div className="">
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard title={node.frontmatter.title} slug={node.fields.slug} />
          // <div key={node.id}>
          //   <Link
          //     to={node.fields.slug}
          //     style={{ textDecoration: "none", color: "inherit" }}
          //   >
          //     <h3>
          //       {node.frontmatter.title} <span>{node.frontmatter.date}</span>
          //     </h3>
          //     <p>{node.excerpt}</p>
          //   </Link>
          // </div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
