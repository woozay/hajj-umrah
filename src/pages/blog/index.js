import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from '../../components/Layout'
import BlogRoll from "../../components/BlogRoll";

export default () => {
    return <Layout>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Blog</h1>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <BlogRoll />
            </div>
        </section>
    </Layout>
}