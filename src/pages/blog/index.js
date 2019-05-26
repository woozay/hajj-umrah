import React from "react"
import Layout from '../../components/Layout'
import BlogRoll from "../../components/BlogRoll";

export default () => {
    return <Layout>
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Blog</h1>
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