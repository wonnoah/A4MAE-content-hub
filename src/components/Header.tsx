import { useState } from "react";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box as="header" background="#232f3e" height="101px">
      <Container maxWidth="full" pl="30px" pr="40px">
        <Grid templateColumns="89px 1fr 1fr" gap={6}>
          <GridItem colSpan={1} bg="yellow">
            <Text color="red">Logo</Text>
          </GridItem>
          <GridItem colSpan={1} bg="green">
            <Text color="white">Console Navigation</Text>

            <GridItem colSpan={2} bg="red">
              <Text color="white">Products</Text>
              <Text color="white">Solutions</Text>
              <Text color="white">Pricing</Text>
              <Text color="white">Documentation</Text>
              <Text color="white">Learn</Text>
              <Text color="white">Partner Network</Text>
              <Text color="white">AWS Marketplace</Text>
              <Text color="white">Customer Enablement</Text>
              <Text color="white">Events</Text>
              <Text color="white">Explore More</Text>
            </GridItem>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
