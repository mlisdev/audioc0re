import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"


const Location = () => {
  const data = useStaticQuery(
    graphql`
    query  {
        allContentfulLocation(sort: {fields: contentful_id, order: DESC}) {
            edges {
            node {
                city {
                city
                }
            }
            }
        }
        }
    `
  )
  return (
      <Layout>
          <div>
      {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li key={edge.node.id}>
              [edge.node.city]
            </li>
          )
      })}
              </div>
    </Layout>
  )
}

export default Location