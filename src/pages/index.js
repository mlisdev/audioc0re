import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";
import Home from "../pages/home";



export default function Index() {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Home />
        </Layout>
    </ChakraProvider>
  )
}