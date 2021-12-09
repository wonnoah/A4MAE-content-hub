import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Box, Center, Container, Heading, Icon, Image, Link, Flex, Grid, GridItem, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";

// Adobe XD: https://xd.adobe.com/view/20ffd87b-1008-4d82-bc49-2e39c3cb2b1d-75ac/

function App() {
  const [data, setData] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  console.log("🚀 ~ file: App.tsx ~ line 13 ~ App ~ ebooks", ebooks);
  const [whitepapers, setWhitepapers] = useState([]);
  console.log("🚀 ~ file: App.tsx ~ line 15 ~ App ~ whitepapers", whitepapers);
  const [webcasts, setWebcasts] = useState([]);
  console.log("🚀 ~ file: App.tsx ~ line 17 ~ App ~ webcasts", webcasts);

  useEffect(() => {
    const apiURL =
      "https://aws.amazon.com/api/dirs/items/search?item.directoryId=media-resources&sort_by=item.dateCreated&sort_order=desc&size=12&item.locale=en_US";
    const proxyURL = "https://powerful-bastion-47434.herokuapp.com/";

    const fetchData = async () => {
      try {
        const response = await fetch(proxyURL + apiURL);
        const json = await response.json();
        console.log(json);
        setData(json.items);
        setEbooks(json.items.filter((x: any) => x.item.additionalFields.contentCategory === "e-book"));
        setWhitepapers(json.items.filter((x: any) => x.item.additionalFields.contentCategory === "whitepapers"));
        setWebcasts(json.items.filter((x: any) => x.item.additionalFields.contentCategory === "Webcast"));
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Hero />
      <Container maxWidth="1200px" background="#232f3e">
        <Box textAlign="center" color="white" py={14}>
          <Heading fontSize={["2xl", "3xl"]} fontWeight="bold">
            Lorem ipsum dolor sit amet
          </Heading>
          <Text fontSize={["md", "lg"]} mt={4} lineHeight={2}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus et Lorem ipsum dolor sit amet.
            Lrem ipsum dolor sit amet sed diam nonumy.
          </Text>
        </Box>
      </Container>

      <Container maxWidth="1200px" background="#232f3e" p={0}>
        <Tabs variant="enclosed">
          <TabList color="white" justifyContent="space-around" px={3}>
            <Tab
              px={[2, 4]}
              fontSize={["xs", "md"]}
              fontWeight="medium"
              color="gray.300"
              _selected={{ color: "white", fontWeight: "bold", borderBottom: "3px solid #38B2AC" }}
              _hover={{ color: "white" }}
            >
              Content Production
            </Tab>
            <Tab
              px={[2, 4]}
              fontSize={["xs", "md"]}
              fontWeight="medium"
              color="gray.300"
              _selected={{ color: "white", fontWeight: "bold", borderBottom: "3px solid #38B2AC" }}
              _hover={{ color: "white" }}
            >
              Media Supply Chain
            </Tab>
            <Tab
              px={[2, 4]}
              fontSize={["xs", "md"]}
              fontWeight="medium"
              color="gray.300"
              _selected={{ color: "white", fontWeight: "bold", borderBottom: "3px solid #38B2AC" }}
              _hover={{ color: "white" }}
            >
              Broadcast
            </Tab>
            <Tab
              px={[2, 4]}
              fontSize={["xs", "md"]}
              fontWeight="medium"
              color="gray.300"
              _selected={{ color: "white", fontWeight: "bold", borderBottom: "3px solid #38B2AC" }}
              _hover={{ color: "white" }}
            >
              Direct-to-Consumer
            </Tab>
            <Tab
              px={[2, 4]}
              fontSize={["xs", "md"]}
              fontWeight="medium"
              color="gray.300"
              _selected={{ color: "white", fontWeight: "bold", borderBottom: "3px solid #38B2AC" }}
              _hover={{ color: "white" }}
            >
              Data Science & Analytics
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid display={["block", "grid"]} templateColumns="repeat(4, 1fr)" gap={5} mt={4}>
                {data.map((item, i) => {
                  const { contentTitle, contentDescription, contentCtaURL } = item.item.additionalFields;
                  return (
                    <GridItem
                      role="group"
                      position="relative"
                      key={i}
                      color="white"
                      mt={[4, 0]}
                      p={8}
                      background="gray.700"
                      backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)"
                      backgroundPosition="center"
                      backgroundSize="cover"
                      colSpan={2}
                      className="item"
                      height="350px"
                    >
                      <Flex flexDirection="column" justifyContent="end" alignItems="start" height="100%">
                        <Heading fontSize="xl" fontWeight="bold" lineHeight={1.5}>
                          {contentTitle}
                        </Heading>
                        <Box mt={3} zIndex={100}>
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
                        p={8}
                        position="absolute"
                        top="0px"
                        left="0px"
                        width="100%"
                        height="100%"
                        transition="all 0.4s ease"
                        color="transparent"
                        _hover={{ background: "hsla(177, 52%, 46%, .2)", color: "gray.200" }}
                      >
                        <Text
                          as="em"
                          fontSize={["sm", "md"]}
                          lineHeight={"2"}
                          dangerouslySetInnerHTML={{ __html: contentDescription }}
                          noOfLines={3}
                          _groupHover={{ color: "teal.200" }}
                        />
                      </Box>
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid display={["block", "grid"]} templateColumns="repeat(4, 1fr)" gap={5} mt={4}>
                {ebooks.map((ebook, i) => {
                  const { contentTitle, contentDescription, contentCtaURL } = ebook.item.additionalFields;
                  return (
                    <GridItem
                      role="group"
                      position="relative"
                      key={i}
                      color="white"
                      mt={[4, 0]}
                      p={8}
                      background="gray.700"
                      backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1637942695886-69c5094fb1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
                      backgroundPosition="center"
                      backgroundSize="cover"
                      colSpan={2}
                      className="item"
                      height="350px"
                    >
                      <Flex flexDirection="column" justifyContent="end" alignItems="start" height="100%">
                        <Heading fontSize="xl" fontWeight="bold" lineHeight={1.5}>
                          {contentTitle}
                        </Heading>
                        <Box mt={3} zIndex={100}>
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
                        p={8}
                        position="absolute"
                        top="0px"
                        left="0px"
                        width="100%"
                        height="100%"
                        transition="all 0.4s ease"
                        color="transparent"
                        _hover={{ background: "hsla(177, 52%, 46%, .2)", color: "gray.200" }}
                      >
                        <Text
                          as="em"
                          fontSize={["sm", "md"]}
                          lineHeight={"2"}
                          dangerouslySetInnerHTML={{ __html: contentDescription }}
                          noOfLines={3}
                          _groupHover={{ color: "teal.200" }}
                        />
                      </Box>
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid display={["block", "grid"]} templateColumns="repeat(4, 1fr)" gap={5} mt={4}>
                {webcasts.map((webcast, i) => {
                  const { contentTitle, contentDescription, contentCtaURL } = webcast.item.additionalFields;
                  return (
                    <GridItem
                      role="group"
                      position="relative"
                      key={i}
                      color="white"
                      mt={[4, 0]}
                      p={8}
                      background="gray.700"
                      backgroundImage="linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80)"
                      backgroundPosition="center"
                      backgroundSize="cover"
                      colSpan={2}
                      className="item"
                      height="350px"
                    >
                      <Flex flexDirection="column" justifyContent="end" alignItems="start" height="100%">
                        <Heading fontSize="xl" fontWeight="bold" lineHeight={1.5}>
                          {contentTitle}
                        </Heading>
                        <Box mt={3} zIndex={100}>
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
                        p={8}
                        position="absolute"
                        top="0px"
                        left="0px"
                        width="100%"
                        height="100%"
                        transition="all 0.4s ease"
                        color="transparent"
                        _hover={{ background: "hsla(177, 52%, 46%, .2)", color: "gray.200" }}
                      >
                        <Text
                          as="em"
                          fontSize={["sm", "md"]}
                          lineHeight={"2"}
                          dangerouslySetInnerHTML={{ __html: contentDescription }}
                          noOfLines={3}
                          _groupHover={{ color: "teal.200" }}
                        />
                      </Box>
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Center minHeight="400px">
                <Text fontSize="3xl" color="white">
                  D2C & Streaming Content Goes Here
                </Text>
              </Center>
            </TabPanel>
            <TabPanel>
              <Center minHeight="400px">
                <Text fontSize="3xl" color="white">
                  Data Science & Analytics for Media Content Goes Here
                </Text>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Container
        maxWidth="full"
        background="gray.700"
        mt={20}
        py={14}
        backgroundImage="https://images.unsplash.com/photo-1558811916-51c8d56d29c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Box maxWidth="1200px" textAlign="center" color="white" p={[4, 20]} mx="auto">
          <Heading fontSize={["2xl", "3xl"]} fontWeight="black">
            Lorem ipsum dolor sit amet
          </Heading>
          <Text fontSize={["md", "lg"]} mt={4} lineHeight={2}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus et Lorem ipsum dolor sit amet.
            Lrem ipsum dolor sit amet sed diam nonumy.
          </Text>
        </Box>
      </Container>
    </Layout>
  );
}

export default App;
