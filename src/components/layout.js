import React from "react";
import Header from "./header"; 
import { Box, Heading, Link } from '@chakra-ui/react';
// import "./layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Box as="div" m="0 auto" maxW="960px" p="1rem">
        
        {children}
      </Box>
      </div>
  )
}