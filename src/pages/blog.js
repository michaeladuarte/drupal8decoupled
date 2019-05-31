import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlogTeaser from "../components/BlogTeaser.js"
import Image from "../components/image"


const BlogPage = ( { data } ) => (
  <Layout>
    <h1 style={{
		 textAlign: 'center'
	}}>Inspiration Articles</h1>
	<div>
    {data.allNodeArticle.edges.map((post) => (
      <BlogTeaser
        key={post.node.id}
        title={post.node.title}
		summary={post.node.body.value.length > 0 ? post.node.body.value : post.node.body.processed.substring(0, 300)}
      />
    ) )}
	</div>
	<Image />
  </Layout>
)

export const query = graphql`
  query BlogPageQuery {
    allNodeArticle {
      edges {
        node {
          id
          title
          body {
            processed
            value
          }
        }
      }
    }
  }
`

export default BlogPage
