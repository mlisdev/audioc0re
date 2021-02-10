import React from "react";
import { Heading, Text, VStack } from '@chakra-ui/react';


export default function Home() {
  return (
  <VStack
  spacing={4}
  align="stretch"
  >
      <Heading>Welcome to audioC0RE! </Heading>
      <Text fontSize="lg">We're the #1 headphones lending experience in the world! </Text>

      <Text fontSize="lg">We're also the only headphones lending experience in the world! </Text>
</VStack>
  )
}