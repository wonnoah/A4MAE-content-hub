import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Box, Container, Heading, Icon, Image, Link, Flex, Grid, GridItem, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";

// Adobe XD: https://xd.adobe.com/view/20ffd87b-1008-4d82-bc49-2e39c3cb2b1d-75ac/

function App() {
  const [data, setData] = useState({ items: [] });
  const { items } = data;
  console.log("🚀 ~ file: App.tsx ~ line 9 ~ App ~ data", items);

  useEffect(() => {
    const url =
      "https://thingproxy.freeboard.io/fetch/https://aws.amazon.com/api/dirs/items/search?item.directoryId=media-resources&sort_by=item.dateCreated&sort_order=desc&size=12&item.locale=en_US";

    const fetchData = async () => {
      try {
        const response = await fetch(url, { mode: "no-cors" });
        const json = await response.json();
        console.log(json);
        setData(json);
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
        <Box textAlign="center" color="white" p={10}>
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

      <Container maxWidth="1200px" background="#232f3e">
        <Tabs>
          <TabList color="white" justifyContent="space-around">
            <Tab _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Content
              <br />
              Production
            </Tab>
            <Tab _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Media Supply Chain <br />& Archive
            </Tab>
            <Tab _selected={{ color: "white", borderBottom: "3px solid orange" }}>Broadcast</Tab>
            <Tab _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Direct-to-Consumer
              <br />& Streaming
            </Tab>
            <Tab _selected={{ color: "white", borderBottom: "3px solid orange" }}>
              Data Science
              <br />& Analytics for Media
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={14}>
                {items.map((ebook, i) => {
                  const { contentTitle, contentDescription, contentCtaURL } = ebook.item.additionalFields;
                  return (
                    <GridItem
                      key={i}
                      color="white"
                      p={8}
                      background="gray.700"
                      backgroundImage="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                      backgroundPosition="center"
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
              <Text color="white">Media Supply Chain & Archive Content</Text>
            </TabPanel>
            <TabPanel>
              <Text color="white">Broadcast Content</Text>
            </TabPanel>
            <TabPanel>
              <Text color="white">D2C & Streaming Content</Text>
            </TabPanel>
            <TabPanel>
              <Text color="white">Data Science & Analytics for Media Content</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Container
        maxWidth="full"
        background="gray.700"
        mt={20}
        py={8}
        backgroundImage="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        backgroundPosition="center"
      >
        <Box maxWidth="1200px" textAlign="center" color="white" p={10} mx="auto">
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
