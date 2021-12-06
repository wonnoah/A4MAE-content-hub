import { useState } from "react";
import { Box, Button, Container, Image, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import logo from "../images/aws_smile-header-desktop-en-white_59x35@2x.png";

function Header() {
  return (
    <Box as="header" background="#232f3e">
      <Container maxWidth="full" pl="30px" pr="40px">
        <Grid templateColumns="89px 1fr 1fr" gap={6} py={0} pl={0}>
          <GridItem colSpan={1} p={4}>
            <Image src={logo} alt="AWS Logo" />
          </GridItem>
          <GridItem colStart={3} display="flex" flexDirection="column" justifyContent="center">
            <Flex gridGap={4} justifyContent="end" alignItems="center">
              <Text fontSize="sm" color="white">
                Contact Us
              </Text>
              <Text fontSize="sm" color="white">
                Support
              </Text>
              <Text fontSize="sm" color="white">
                English
              </Text>
              <Text fontSize="sm" color="white">
                My Account
              </Text>
              <Text fontSize="sm" color="white">
                Sign In
              </Text>
              <Button size="sm" colorScheme="orange" borderRadius="sm">
                Create an AWS Account
              </Button>
            </Flex>
          </GridItem>
        </Grid>
        <Flex gridGap={5} justifyContent="start" alignItems="center" p={2} pl={4} pt={0} pb={3}>
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
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
