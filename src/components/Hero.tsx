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
            <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="0.2em">
              E-Book
            </Text>
            <Box mt={3}>
              <Link href="#" isExternal transition="all 2s ease" _hover={{ textUnderline: "none" }}>
                <Text
                  fontSize="md"
                  fontWeight="black"
                  color="teal.400"
                  transition="all .2s ease"
                  _hover={{ textDecoration: "underline", textUnderlineOffset: ".2em", color: "teal.100" }}
                >
                  Learn more <Icon as={GoChevronRight} verticalAlign="text-bottom" />
                </Text>
              </Link>
            </Box>
          </Container>
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="start"
          alignItems="end"
          minHeight="250px"
          bg="gray.600"
          backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1587893904933-5b23fefaea6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
          backgroundPosition="center"
          backgroundSize="cover"
          mt={[4, 0]}
          p={6}
        >
          <Container maxWidth={["100%", "75%"]} ml={0}>
            <Heading fontSize="xl" fontWeight="bold" color="white" lineHeight={1.5}>
              Lorem ipsum dolor sit amet consetetur sadipscing.
            </Heading>
            <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="0.2em">
              E-Book
            </Text>
            <Box mt={3}>
              <Link href="#" isExternal transition="all 2s ease" _hover={{ textUnderline: "none" }}>
                <Text
                  fontSize="md"
                  fontWeight="black"
                  color="teal.400"
                  transition="all .2s ease"
                  _hover={{ textDecoration: "underline", textUnderlineOffset: ".2em", color: "teal.100" }}
                >
                  Learn more <Icon as={GoChevronRight} verticalAlign="text-bottom" />
                </Text>
              </Link>
            </Box>
          </Container>
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="start"
          alignItems="end"
          minHeight="250px"
          bg="gray.700"
          backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1598387992619-f86d5293bace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80)"
          backgroundPosition="center"
          backgroundSize="cover"
          mt={[4, 0]}
          p={6}
        >
          <Container maxWidth={["100%", "75%"]} ml={0}>
            <Heading fontSize="xl" fontWeight="bold" color="white" lineHeight={1.5}>
              Lorem ipsum dolor sit amet consetetur sadipscing.
            </Heading>
            <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="0.2em">
              E-Book
            </Text>
            <Box mt={3}>
              <Link href="#" isExternal transition="all 2s ease" _hover={{ textUnderline: "none" }}>
                <Text
                  fontSize="md"
                  fontWeight="black"
                  color="teal.400"
                  transition="all .2s ease"
                  _hover={{ textDecoration: "underline", textUnderlineOffset: ".2em", color: "teal.100" }}
                >
                  Learn more <Icon as={GoChevronRight} verticalAlign="text-bottom" />
                </Text>
              </Link>
            </Box>
          </Container>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Hero;
