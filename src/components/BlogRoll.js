import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
        edges {
          node {
            excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 48, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
          }
        }
      }
    }
  `)
  const Posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <p>{JSON.stringify(edge)}</p>)


  const { edges: posts } = data.allMarkdownRemark
  return <div className="columns is-multiline">
    {posts &&
      posts.map(({ node: post }) => (

        <div className="is-parent column is-6">
        <div className="card"  key={post.id}>

          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                            }`,
                        }}
                      />
                    </div>
                  ) : null}
                </figure>
              </div>
              <div class="media-content">
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                </p>
              </div>
            </div>


            <div class="content">

              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                  </Link>
              </p>
            </div>
          </div>
        </div>
        </div>
      ))}
  </div>
}