import { graphql, PageProps } from "gatsby"
import React from "react"

interface BlogPostProps extends PageProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
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
`

const BlogPost: React.FC<BlogPostProps> = props => {
  console.log(props)
  const post = props.data.markdownRemark
  return (
    <div>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export default BlogPost
