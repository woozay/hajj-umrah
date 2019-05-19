import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from '../components/Layout'
import FixedImage from "../components/FixedImage";
import Hero from "../components/Hero";
import BlogRoll from "../components/BlogRoll";

export default () => {
  return <Layout>
    <Hero />
    <section className="section">
      <div className="container">
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
        </div>
        <BlogRoll />
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">Read more</Link>
        </div>
      </div>
    </section>
  </Layout>
}