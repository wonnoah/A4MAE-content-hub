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
        <Box textAlign="center" color="white" p={[4, 10]}>
          <Heading fontSize="3xl" fontWeight="bold">
            Lorem ipsum dolor sit amet
          </Heading>
          <Text fontSize="lg" mt={4}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus et Lorem ipsum dolor sit amet.
            Lrem ipsum dolor sit amet sed diam nonumy.
          </Text>
        </Box>
      </Container>

      <Container maxWidth="1200px" background="#232f3e" p={0}>
        <Tabs>
          <TabList color="white" justifyContent="space-around">
            <Tab p={[2, 4]} fontSize={["xs", "md"]} _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Content
              <br />
              Production
            </Tab>
            <Tab p={[2, 4]} fontSize={["xs", "md"]} _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Media Supply Chain <br />& Archive
            </Tab>
            <Tab p={[2, 4]} fontSize={["xs", "md"]} _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Broadcast
            </Tab>
            <Tab p={[2, 4]} fontSize={["xs", "md"]} _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Direct-to-Consumer
              <br />& Streaming
            </Tab>
            <Tab p={[2, 4]} fontSize={["xs", "md"]} _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Data Science
              <br />& Analytics for Media
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid display={["block", "grid"]} templateColumns="repeat(4, 1fr)" gap={5} mt={14}>
                {data.map((item, i) => {
                  const { contentTitle, contentDescription, contentCtaURL } = item.item.additionalFields;
                  return (
                    <GridItem
                      key={i}
                      color="white"
                      p={8}
                      background="gray.700"
                      backgroundImage="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                      backgroundPosition="center"
                      backgroundSize="cover"
                      colSpan={2}
                      className="item"
                      height="400px"
                    >
                      <Flex flexDirection="column" justifyContent="end" alignItems="start" height="100%">
                        <Heading fontSize="lg" fontWeight="medium">
                          {contentTitle}
                        </Heading>
                        <Box mt={3}>
                          <Link href={contentCtaURL} isExternal>
                            <Text fontSize="lg" fontWeight="black">
                              CTA goes here <Icon as={GoChevronRight} verticalAlign="text-bottom" />
                            </Text>
                          </Link>
                        </Box>
                      </Flex>
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid display={["block", "grid"]} templateColumns="repeat(4, 1fr)" gap={5} mt={14}>
                {ebooks.map((ebook, i) => {
                  const { contentTitle, contentDescription, contentCtaURL } = ebook.item.additionalFields;
                  return (
                    <GridItem
                      key={i}
                      color="white"
                      p={8}
                      background="gray.700"
                      backgroundImage="https://images.unsplash.com/photo-1637942695886-69c5094fb1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                      backgroundPosition="center"
                      backgroundSize="cover"
                      colSpan={2}
                      className="item"
                      height="400px"
                    >
                      <Flex flexDirection="column" justifyContent="end" alignItems="start" height="100%">
                        <Heading fontSize="lg" fontWeight="medium">
                          {contentTitle}
                        </Heading>
                        <Box mt={3}>
                          <Link href={contentCtaURL} isExternal>
                            <Text fontSize="lg" fontWeight="black">
                              CTA goes here <Icon as={GoChevronRight} verticalAlign="text-bottom" />
                            </Text>
                          </Link>
                        </Box>
                      </Flex>
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid display={["block", "grid"]} templateColumns="repeat(4, 1fr)" gap={5} mt={14}>
                {webcasts.map((webcast, i) => {
                  const { contentTitle, contentDescription, contentCtaURL } = webcast.item.additionalFields;
                  return (
                    <GridItem
                      key={i}
                      color="white"
                      p={8}
                      background="gray.700"
                      backgroundImage="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                      backgroundPosition="center"
                      backgroundSize="cover"
                      colSpan={2}
                      className="item"
                      height="400px"
                    >
                      <Flex flexDirection="column" justifyContent="end" alignItems="start" height="100%">
                        <Heading fontSize="lg" fontWeight="medium">
                          {contentTitle}
                        </Heading>
                        <Box mt={3}>
                          <Link href={contentCtaURL} isExternal>
                            <Text fontSize="lg" fontWeight="black">
                              CTA goes here <Icon as={GoChevronRight} verticalAlign="text-bottom" />
                            </Text>
                          </Link>
                        </Box>
                      </Flex>
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
        py={8}
        backgroundImage="https://images.unsplash.com/photo-1558811916-51c8d56d29c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Box maxWidth="1200px" textAlign="center" color="white" p={[4, 10]} mx="auto">
          <Heading fontSize="3xl" fontWeight="black">
            Lorem ipsum dolor sit amet
          </Heading>
          <Text fontSize="lg" mt={4}>
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
