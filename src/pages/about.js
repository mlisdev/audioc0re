import React from "react";
import Layout from "../components/layout";
import { Heading, Text, VStack } from '@chakra-ui/react';


export default function About() {
  return (
    <Layout>
      <VStack
    spacing={4}
    align="stretch"
      >
        <Heading>About AudioC0RE</Heading>
      <p>
            AudioC0RE is the leading headphones sharing app in the world! 
      </p>
      <p>
        Our users love us because with AudioC0RE you can pick up a pair of premium AudioC0RE headphones on a city street, pay for a rental through our app, then drop them back on the ground when you’re finished!
      </p>

    </VStack>
  </Layout>

  )
}