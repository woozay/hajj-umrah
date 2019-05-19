import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/Layout'
import FixedImage from "../components/FixedImage";
import Hero from "../components/Hero";

export default () => {
  return <Layout>
      <Hero />
      <div>Hi</div>
  </Layout>
}