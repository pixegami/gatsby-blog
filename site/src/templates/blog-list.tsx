import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import BlogCard from "../components/blog-card";
import Layout from "../components/layout";
import PaginationBar from "../components/pagination-bar";
import "../style/index.css";

interface IndexPageProps extends PageProps {
  pageContext: {
    numPages: number;
    currentPage: number;
  };
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
      subtitle: string;
    };
    timeToRead: string;
    id: string;
  };
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
            subtitle
          }
          timeToRead
          id
          excerpt
        }
      }
    }
  }
`;

const BlogList: React.FC<IndexPageProps> = (props) => {
  console.log(props);
  return (
    <Layout>
      <div className="">
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            slug={node.fields.slug}
            date={node.frontmatter.date}
          />
        ))}
      </div>
      <PaginationBar
        currentPage={props.pageContext.currentPage}
        numPages={props.pageContext.numPages}
      />
    </Layout>
  );
};

export default BlogList;
