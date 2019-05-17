import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/Layout'
import FixedImage from "../components/FixedImage";

export default () => {
  return <Layout>
      <FixedImage />
      <div>Hi</div>
  </Layout>
}