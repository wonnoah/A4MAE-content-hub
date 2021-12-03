import { useState } from "react";
import { Box, Container, Heading, Link, Grid, GridItem, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box>
      <Grid templateColumns="2fr 1fr">
        <GridItem rowSpan={2} bg="gray.800" minHeight="400px" p={20}>
          <Box>
            <Heading fontWeight="black" color="white">
              Lorem ipsum dolor sit amet sadipscing elitr sed
            </Heading>
          </Box>
          <Box mt={6}>
            <Link fontWeight="black" color="white">
              CTA goes here
            </Link>
          </Box>
        </GridItem>
        <GridItem bg="gray.600" p={4}>
          <Heading fontSize="lg" fontWeight="black" color="white">
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod.
          </Heading>
          <Box mt={4}>
            <Link color="white">CTA goes here</Link>
          </Box>
        </GridItem>
        <GridItem bg="gray.700" p={4}>
          <Heading fontSize="lg" fontWeight="black" color="white">
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod.
          </Heading>
          <Box mt={4}>
            <Link color="white">CTA goes here</Link>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Hero;
