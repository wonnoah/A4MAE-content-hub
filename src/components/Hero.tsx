import { useState } from "react";
import { Box, Container, Heading, Icon, Link, Grid, GridItem, Text } from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";

const Hero = () => {
  return (
    <Box>
      <Grid display={["block", "grid"]} templateColumns="2fr 1fr">
        <GridItem
          rowSpan={2}
          background="gray.800"
          backgroundImage="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          backgroundPosition="center"
          minHeight="400px"
          p={[6, 20]}
        >
          <Container>
            <Box>
              <Heading fontWeight="black" color="white">
                Lorem ipsum dolor sit amet sadipscing elitr sed
              </Heading>
            </Box>
            <Box mt={6}>
              <Link fontWeight="black" color="white">
                CTA goes here <Icon as={GoChevronRight} verticalAlign="text-bottom" />
              </Link>
            </Box>
          </Container>
        </GridItem>
        <GridItem
          bg="gray.600"
          backgroundImage="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          backgroundPosition="center"
          p={8}
        >
          <Heading fontSize="lg" fontWeight="black" color="white">
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod.
          </Heading>
          <Box mt={4}>
            <Link color="white" fontWeight="black">
              CTA goes here <Icon as={GoChevronRight} verticalAlign="text-bottom" />
            </Link>
          </Box>
        </GridItem>
        <GridItem
          bg="gray.700"
          backgroundImage="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          backgroundPosition="center"
          p={8}
        >
          <Heading fontSize="lg" fontWeight="black" color="white">
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod.
          </Heading>
          <Box mt={4}>
            <Link color="white" fontWeight="black">
              CTA goes here <Icon as={GoChevronRight} verticalAlign="text-bottom" />
            </Link>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Hero;
