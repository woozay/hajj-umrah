import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return <Layout>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{post.frontmatter.title}</h1>
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