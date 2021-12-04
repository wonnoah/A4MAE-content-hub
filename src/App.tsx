import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Box, Container, Heading, Link, Grid, GridItem, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react";

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
        const response = await fetch(url);
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
          <Heading>Lorem ipsum dolor sit amet</Heading>
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus et Lorem ipsum dolor sit amet.
            Lrem ipsum dolor sit amet sed diam nonumy.
          </Text>
        </Box>
      </Container>

      <Container maxWidth="1200px" background="#232f3e">
        <Tabs>
          <TabList color="white" justifyContent="center" gridGap={4}>
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
              <Grid templateColumns="1fr 1fr" gap={6}>
                {items.map((ebook, i) => {
                  const { contentTitle, contentDescription, contentCtaURL } = ebook.item.additionalFields;
                  return (
                    <GridItem key={i} color="white" p={5} background="gray.700">
                      <Heading fontSize="md">{contentTitle}</Heading>
                      <Link href={contentCtaURL} isExternal>
                        Learn more
                      </Link>
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Container maxWidth="full" background="gray.700" mt={8} py={8}>
        <Box maxWidth="1200px" textAlign="center" color="white" p={10} mx="auto">
          <Heading>Lorem ipsum dolor sit amet</Heading>
          <Text mt={4}>
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
