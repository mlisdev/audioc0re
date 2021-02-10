import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Heading, Link } from '@chakra-ui/react';
import ThemeToggle from './theme-toggle';


const Header = ({children}) => (
  <Box as="header" background="cyan.700" marginBottom="1.45rem">
    <Box as="div" m="0 auto" maxW="960px" p="1rem">
      <Heading margin="0">
        <Link
          as={GatsbyLink}
          to="/"
          color="white"
        _hover={{ textDecor: 'none' }}
        fontSize="md"
        >
        <Link to="/">
          audioC0RE
        </Link> &nbsp; | &nbsp; 
          <Link as={GatsbyLink} to="/">Home</Link> &nbsp; | &nbsp; 
          <Link as={GatsbyLink} to="/about/">About</Link> &nbsp; | &nbsp; 
          <Link as={GatsbyLink} to="/location/">Location</Link>
        </Link>
      </Heading>
    </Box>
    <Box as="div" position="fixed" right="20px" top="20px">
      <ThemeToggle />
    </Box>
  </Box>
)

export default Header; 