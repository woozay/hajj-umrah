import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return <Layout>
    <Helmet titleTemplate="%s | Blog">
      <title>{`${post.frontmatter.title}`}</title>
      <meta
        name="description"
        content={`${post.frontmatter.description}`}
      />
    </Helmet>
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container blog-post">
          <h1 className="title">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  </Layout>
}

export const query = graphql`
    query BlogPostByID($id: String!) {
      markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  `
export default BlogPost;