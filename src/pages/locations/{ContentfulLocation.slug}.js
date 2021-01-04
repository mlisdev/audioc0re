  
import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';

const LocationList = ({ data }) => {
  return (
    <Layout>
      <div class="content">
        <h1>{data.contentfulLocation.city.city}</h1>
        <p class="goodplace">Welcome! <br />
        Everything is fine. </p>
        </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
    slug
    city {
      city
    }
}
  }
`;

export default LocationList;