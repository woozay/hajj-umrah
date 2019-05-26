import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from '../components/Layout'
import FixedImage from "../components/FixedImage";
import Hero from "../components/Hero";
import BlogRoll from "../components/BlogRoll";

const IndexPage = ({data}) => {
  const { frontmatter } = data.markdownRemark
  return <Layout>
    <Hero heading={frontmatter.heading} subheading={frontmatter.subheading} image={frontmatter.image} />
    <section className="section">
      <div className="container">
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
        </div>
        <BlogRoll />
        <div className="column is-12 has-text-centered">
          <Link className="button is-primary is-outlined" to="/blog">Read more</Link>
        </div>
      </div>
    </section>
    <section className="section has-background-dark">
      <div className="container content has-text-white">
        <h1 className="has-text-white">About</h1>
        <p>{ frontmatter.about }</p>
      </div>
    </section>
  </Layout>
}
export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
        about
      }
    }
  }
`