import { Box, Container, Heading, Flex, Icon, Link, Grid, GridItem, Text } from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";
import { FadeIn } from "./FadeIn";

const Hero = () => {
  return (
    <FadeIn>
      <Grid display={["block", "grid"]} templateColumns="2fr 1fr">
        <GridItem
          role="group"
          position="relative"
          rowSpan={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minHeight="50vh"
          p={[6]}
          overflow="hidden"
        >
          <Container zIndex={100}>
            <Heading fontWeight="black" fontSize={["3xl", "5xl"]} color="white">
              Lorem ipsum dolor sit amet sadipscing elitr sed
            </Heading>
            <Text fontSize={["sm", "lg"]} color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="0.2em">
              E-Book
            </Text>
            <Box mt={3}>
              <Link href="#" isExternal _hover={{ textUnderline: "none" }}>
                <Text
                  as="span"
                  fontSize={["md", "lg"]}
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
          <Box
            position="absolute"
            top="0px"
            left="0px"
            width="100%"
            height="100%"
            background="gray.800"
            backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)"
            backgroundPosition="center"
            backgroundSize="cover"
            transition="all 0.4s ease-out"
            _groupHover={{ transform: "scale(1.1) rotate(-2deg)" }}
          />
          <Box
            role="group"
            p={10}
            position="absolute"
            top="0px"
            left="0px"
            width="100%"
            height="100%"
            transition="all 0.4s ease-out"
            color="transparent"
            transform="translateY(100%)"
            opacity={0}
            _groupHover={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 75%), rgba(56, 178, 172, 0.4))",
              color: "gray.200",
              transform: "translateY(0)",
              opacity: "1",
            }}
          >
            <Text fontSize={["sm"]} fontWeight="bold" letterSpacing="0.15em" lineHeight={"2"} noOfLines={2} _groupHover={{ color: "gray.300" }}>
              Description of asset goes here. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus et Lorem ipsum dolor sit amet. Lrem ipsum dolor sit amet sed diam nonumy.
            </Text>
          </Box>
        </GridItem>

        <GridItem
          role="group"
          position="relative"
          display="flex"
          justifyContent="start"
          alignItems="end"
          minHeight="300px"
          bg="gray.600"
          mt={[4, 0]}
          p={6}
          overflow="hidden"
        >
          <Container zIndex={100} maxWidth={["100%", "75%"]} ml={[0]}>
            <Heading fontSize="xl" fontWeight="bold" color="white" lineHeight={1.5}>
              Lorem ipsum dolor sit amet consetetur sadipscing.
            </Heading>
            <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="0.2em">
              E-Book
            </Text>
            <Box mt={3}>
              <Link href="#" isExternal _hover={{ textUnderline: "none" }}>
                <Text
                  as="span"
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
          <Box
            position="absolute"
            top="0px"
            left="0px"
            width="100%"
            height="100%"
            background="gray.800"
            backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1587893904933-5b23fefaea6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
            backgroundPosition="center"
            backgroundSize="cover"
            transition="all 0.4s ease-out"
            _groupHover={{ transform: "scale(1.1) rotate(-2deg)" }}
          />
          <Box
            role="group"
            p={10}
            position="absolute"
            top="0px"
            left="0px"
            width="100%"
            height="100%"
            transition="all 0.4s ease-out"
            color="transparent"
            transform="translateY(100%)"
            opacity={0}
            _groupHover={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 75%), rgba(56, 178, 172, 0.4))",
              color: "gray.200",
              transform: "translateY(0)",
              opacity: "1",
            }}
          >
            <Text fontSize={["sm"]} fontWeight="bold" letterSpacing="0.15em" lineHeight={"1.8"} noOfLines={3} _groupHover={{ color: "gray.300" }}>
              Description of asset goes here. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua.
            </Text>
          </Box>
        </GridItem>

        <GridItem
          role="group"
          position="relative"
          display="flex"
          justifyContent="start"
          alignItems="end"
          minHeight="300px"
          bg="gray.700"
          mt={[4, 0]}
          p={6}
          overflow="hidden"
        >
          <Container zIndex={100} maxWidth={["100%", "75%"]} ml={[0]}>
            <Heading fontSize="xl" fontWeight="bold" color="white" lineHeight={1.5}>
              Lorem ipsum dolor sit amet consetetur sadipscing.
            </Heading>
            <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="0.2em">
              E-Book
            </Text>
            <Box mt={3}>
              <Link href="#" isExternal transition="all 2s ease" _hover={{ textUnderline: "none" }}>
                <Text
                  as="span"
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
          <Box
            position="absolute"
            top="0px"
            left="0px"
            width="100%"
            height="100%"
            background="gray.800"
            backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1598387992619-f86d5293bace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80)"
            backgroundPosition="center"
            backgroundSize="cover"
            transition="all 0.4s ease-out"
            _groupHover={{ transform: "scale(1.1) rotate(-2deg)" }}
          />
          <Box
            role="group"
            p={10}
            position="absolute"
            top="0px"
            left="0px"
            width="100%"
            height="100%"
            transition="all 0.4s ease-out"
            color="transparent"
            transform="translateY(100%)"
            opacity={0}
            _groupHover={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 75%), rgba(56, 178, 172, 0.4))",
              color: "gray.200",
              transform: "translateY(0)",
              opacity: "1",
            }}
          >
            <Text fontSize={["sm"]} fontWeight="bold" letterSpacing="0.15em" lineHeight={"1.8"} noOfLines={3} _groupHover={{ color: "gray.300" }}>
              Description of asset goes here. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </FadeIn>
  );
};

export default Hero;
