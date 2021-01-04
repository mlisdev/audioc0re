  
import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';

const LocationList = ({ data }) => {
  return (
    <Layout>
        <h1>{data.contentfulLocation.city.city}</h1>
        <p>Welcome! Everything is fine. </p>
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