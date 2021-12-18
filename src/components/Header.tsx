import { useState } from "react";
import { Box, Button, Container, Image, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import logo from "../images/aws_smile-header-desktop-en-white_59x35@2x.png";

function Header() {
  return (
    <Box as="header" background="#232f3e">
      <Container maxWidth="full" pl="30px" pr="40px">
        <Grid templateColumns={["89px 1fr", "89px 1fr 1fr"]} gap={6} py={0} pl={0}>
          <GridItem colSpan={1} p={[3, 4]}>
            <Image src={logo} alt="AWS Logo" width={["50px", "100%"]} />
          </GridItem>
          <GridItem display={["flex", "flex", "none"]} justifyContent="right" alignItems="center" gridGap={4}>
            <Search2Icon color="white" w={7} h={7} />
            <HamburgerIcon color="white" w={7} h={7} />
          </GridItem>
          <GridItem display={["none", "none", "flex"]} colStart={3} flexDirection="column" justifyContent="center">
            <Flex gridGap={4} justifyContent="end" alignItems="center">
              <Text fontSize="sm" whiteSpace="nowrap" color="white">
                Contact Us
              </Text>
              <Text fontSize="sm" whiteSpace="nowrap" color="white">
                Support
              </Text>
              <Text fontSize="sm" whiteSpace="nowrap" color="white">
                English
              </Text>
              <Text fontSize="sm" whiteSpace="nowrap" color="white">
                My Account
              </Text>
              <Text fontSize="sm" whiteSpace="nowrap" color="white">
                Sign In
              </Text>
              <Button size="sm" colorScheme="orange" borderRadius="sm">
                Create an AWS Account
              </Button>
            </Flex>
          </GridItem>
        </Grid>

        <Flex display={["none", "none", "flex"]} gridGap={5} justifyContent="start" alignItems="center" p={2} pl={4} pt={0} pb={3}>
          <Text color="white" whiteSpace="nowrap">
            Products
          </Text>
          <Text color="white" whiteSpace="nowrap">
            Solutions
          </Text>
          <Text color="white" whiteSpace="nowrap">
            Pricing
          </Text>
          <Text color="white" whiteSpace="nowrap">
            Documentation
          </Text>
          <Text color="white" whiteSpace="nowrap">
            Learn
          </Text>
          <Text color="white" whiteSpace="nowrap">
            Partner Network
          </Text>
          <Text color="white" whiteSpace="nowrap">
            AWS Marketplace
          </Text>
          <Text color="white" whiteSpace="nowrap">
            Customer Enablement
          </Text>
          <Text color="white" whiteSpace="nowrap">
            Events
          </Text>
          <Text color="white" whiteSpace="nowrap">
            Explore More
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
