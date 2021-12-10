import { FadeIn } from "./FadeIn";
import { Box, Flex, Heading, Icon, Link, Grid, GridItem, Text } from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";
import moment from "moment";

const ContentGrid = ({ collection, image }: { collection: any[]; image: string }) => {
  // determine image for collection
  const collectionImage = (image: string) => {
    switch (image) {
      case "all":
        return "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";
      case "ebooks":
        return "https://images.unsplash.com/photo-1637942695886-69c5094fb1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
      case "webcasts":
        return "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80";
      case "whitepapers":
        return "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80";
      case "onlineConferences":
        return "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
      default:
        return "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*";
    }
  };

  return (
    <Grid display={["block", "grid"]} templateColumns="repeat(4, 1fr)" gap={5} mt={4}>
      {collection.map((asset: any, i: any) => {
        const { contentCategory, contentTitle, contentDescription, contentCtaURL } = asset.item.additionalFields;
        const { dateCreated, dateUpdated } = asset.item;
        return (
          <GridItem role="group" position="relative" key={i} color="white" mt={[4, 0]} boxShadow="lg" className="item" overflow="hidden">
            <FadeIn>
              <Box
                p={8}
                height="350px"
                background="gray.700"
                backgroundImage={`linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.75),rgba(0,0,0,1)),url("${collectionImage(image)}")`}
                backgroundPosition="center"
                backgroundSize="cover"
              >
                <Flex flexDirection="column" justifyContent="end" alignItems="start" height="100%">
                  <Box mt={3} zIndex={100}>
                    <Heading fontSize="xl" fontWeight="bold" lineHeight={1.5}>
                      {contentTitle}
                    </Heading>
                    <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="0.2em">
                      {contentCategory} | <Text as="span">{moment(dateCreated).format("MMM D, YYYY")}</Text>
                    </Text>
                    <Link href={contentCtaURL} isExternal transition="all 2s ease" _hover={{ textUnderline: "none" }}>
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
                </Flex>
                <Box
                  role="group"
                  p={8}
                  position="absolute"
                  top="0px"
                  left="0px"
                  width="100%"
                  height="100%"
                  transition="all 0.4s ease"
                  color="transparent"
                  transform="translateX(-100%)"
                  opacity={0}
                  _groupHover={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 1), rgba(56, 178, 172, 0.5))",
                    color: "gray.200",
                    transform: "translateX(0)",
                    opacity: "1",
                  }}
                >
                  <Text
                    fontSize={["sm"]}
                    fontWeight="bold"
                    letterSpacing="0.15em"
                    lineHeight={"2"}
                    dangerouslySetInnerHTML={{ __html: contentDescription }}
                    noOfLines={3}
                    _groupHover={{ color: "gray.!00" }}
                  />
                </Box>
              </Box>
            </FadeIn>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ContentGrid;
