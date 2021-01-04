import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"


const Location = () => {
  const queryData = useStaticQuery(
    graphql`
    query MyQuery {
    allContentfulLocation {
        nodes {
            slug
        city {
            city
            id
        }
        }
    }
    }

    `
  )

  return (
      <Layout>
          <div class="content">
        <h1>Locations</h1>
        <ul>
          {queryData.allContentfulLocation.nodes.map((location) => {
            return (
                <li>
                 <Link to={`/locations/${location.slug}`}>   
                        {location.city.city}
                        </Link>
              </li>
            );
          })}
          </ul>
          </div>
    </Layout>
  );
};


export default Location