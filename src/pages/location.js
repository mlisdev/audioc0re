import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { Heading, List, ListItem, ListIcon, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'

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
      <VStack
    spacing={4}
    align="stretch"
      >
        <Heading>Locations</Heading>
        <List>
          {queryData.allContentfulLocation.nodes.map((location) => {
            return (
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="cyan.700" />
                 <Link to={`/locations/${location.slug}`}>   
                        {location.city.city}
                        </Link>
              </ListItem>
            );
          })}
          </List>
      </VStack>
    </Layout>
  );
};


export default Location