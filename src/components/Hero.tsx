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
          backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)"
          backgroundPosition="center"
          backgroundSize="cover"
          minHeight="400px"
          p={[6]}
          py={[24]}
        >
          <Container>
            <Box>
              <Heading fontWeight="black" color="white">
                Lorem ipsum dolor sit amet sadipscing elitr sed
              </Heading>
            </Box>
            <Box mt={6}>
              <Link fontWeight="black" color="teal.400">
                Learn more <Icon as={GoChevronRight} verticalAlign="text-bottom" />
              </Link>
            </Box>
          </Container>
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="start"
          alignItems="end"
          bg="gray.600"
          backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1587893904933-5b23fefaea6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
          backgroundPosition="center"
          backgroundSize="cover"
          mt={[2, 0]}
          p={[8, 5]}
        >
          <Container maxWidth={["100%", "50%"]} ml={0}>
            <Heading fontSize="md" color="white" lineHeight={1.5}>
              Lorem ipsum dolor sit amet consetetur sadipscing.
            </Heading>
            <Box mt={4}>
              <Link color="teal.400" fontSize="md" fontWeight="black">
                Learn more <Icon as={GoChevronRight} verticalAlign="text-bottom" />
              </Link>
            </Box>
          </Container>
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="start"
          alignItems="end"
          bg="gray.700"
          backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1598387992619-f86d5293bace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80)"
          backgroundPosition="center"
          backgroundSize="cover"
          mt={[2, 0]}
          p={[8, 5]}
        >
          <Container maxWidth={["100%", "50%"]} ml={0}>
            <Heading fontSize="md" color="white" lineHeight={1.5}>
              Lorem ipsum dolor sit amet consetetur sadipscing.
            </Heading>
            <Box mt={4}>
              <Link color="teal.400" fontSize="md" fontWeight="black">
                Learn more <Icon as={GoChevronRight} verticalAlign="text-bottom" />
              </Link>
            </Box>
          </Container>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Hero;
