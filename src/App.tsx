import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import { Box, Button, Circle, Center, Container, Heading, Spinner, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Tag } from "@chakra-ui/react";
import { isZero } from "framer-motion/types/animation/utils/transitions";

// Adobe XD: https://xd.adobe.com/view/20ffd87b-1008-4d82-bc49-2e39c3cb2b1d-75ac/

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [all, setAll] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [whitepapers, setWhitepapers] = useState([]);
  const [webcasts, setWebcasts] = useState([]);
  const [onlineConferences, setOnlineConferences] = useState([]);

  const [contentProduction, setContentProduction] = useState([]);
  const [mediaSupplyChain, setMediaSupplyChain] = useState([]);
  const [broadcast, setBroadcast] = useState([]);
  const [dataScienceAnalytics, setDataScienceAnalytics] = useState([]);
  const [d2cStreaming, setD2cStreaming] = useState([]);

  // filter for asset type
  const filteredEbooks = (x: any[]) => {
    return x.filter((x: any) => x.item.additionalFields.contentCategory === "e-book" || x.item.additionalFields.contentCategory === "E-Book");
  };
  console.log("🚀 ~ file: App.tsx ~ line 31 ~ App ~ filteredEbooks", filteredEbooks(contentProduction));

  const all10Limit = ebooks.slice(0, 10);
  const ebooks10Limit = ebooks.slice(0, 10);
  const whitepapers10Limit = whitepapers.slice(0, 10);
  const webcasts10Limit = webcasts.slice(0, 10);

  useEffect(() => {
    // directory API
    const apiURL =
      "https://aws.amazon.com/api/dirs/items/search?item.directoryId=media-resources&sort_by=item.dateCreated&sort_order=desc&size=50&item.locale=en_US";

    // cors proxy URL
    const proxyURL = "https://powerful-bastion-47434.herokuapp.com/";

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(proxyURL + apiURL);
        const json = await response.json();
        setContentProduction(json.items.filter((x: any) => x.tags.find((x: any) => x.id == "media-resources#segment#content-distribution")));
        setMediaSupplyChain(json.items.filter((x: any) => x.tags.find((x: any) => x.id == "media-resources#segment#media-supply-chain-archive")));
        setBroadcast(json.items.filter((x: any) => x.tags.find((x: any) => x.id == "media-resources#segment#broadcast")));
        setDataScienceAnalytics(json.items.filter((x: any) => x.tags.find((x: any) => x.id == "media-resources#segment#data-science-analytics")));
        setD2cStreaming(json.items.filter((x: any) => x.tags.find((x: any) => x.id == "media-resources#segment#d2c-streaming")));

        setAll(json.items);
        setEbooks(json.items.filter((x: any) => x.item.additionalFields.contentCategory === "e-book" || x.item.additionalFields.contentCategory === "E-Book"));
        setWhitepapers(json.items.filter((x: any) => x.item.additionalFields.contentCategory === "White Paper"));
        setWebcasts(
          json.items.filter((x: any) => x.item.additionalFields.contentCategory === "Webcast" || x.item.additionalFields.contentCategory === "WEBCAST")
        );
        setOnlineConferences(json.items.filter((x: any) => x.item.additionalFields.contentCategory === "Online Conference"));
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Hero />
      <Container maxWidth="1200px">
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

      <Container maxWidth="1200px" p={0}>
        <Tabs variant="enclosed">
          <TabList color="white" justifyContent="space-around" px={3}>
            {/* Content Production Tab */}
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

            {/* Media Supply Chain Tab */}
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

            {/* Broadcast Tab */}
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

            {/* Direct-to-Consumer Tab */}
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

            {/* Data Science & Analytics Tab */}
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
            {/* Content Production Content */}
            <TabPanel px={0}>
              <Tabs size="sm" variant="soft-rounded">
                <TabList flexWrap="wrap" px={4}>
                  {/* all tag */}
                  <Tab textTransform="uppercase" fontSize="xs" px={2} m={1} borderRadius="lg" color="gray.200" _selected={{ background: "teal.600" }}>
                    <Circle size="25px" color="gray.300" bg="teal.700" mr="2">
                      <Text fontSize="xs"> {all.length}</Text>
                    </Circle>
                    all
                  </Tab>

                  {/* ebooks tag */}
                  <Tab textTransform="uppercase" fontSize="xs" px={2} m={1} borderRadius="lg" color="gray.200" _selected={{ background: "teal.600" }}>
                    <Circle size="25px" color="gray.300" bg="teal.700" mr="2">
                      <Text fontSize="xs"> {ebooks.length}</Text>
                    </Circle>
                    ebooks
                  </Tab>

                  {/* webcasts tag */}
                  <Tab textTransform="uppercase" fontSize="xs" px={2} m={1} borderRadius="lg" color="gray.200" _selected={{ background: "teal.600" }}>
                    <Circle size="25px" color="gray.300" bg="teal.700" mr="2">
                      <Text fontSize="xs"> {webcasts.length}</Text>
                    </Circle>
                    webcasts
                  </Tab>

                  {/* whitepapers tag */}
                  <Tab textTransform="uppercase" fontSize="xs" px={2} m={1} borderRadius="lg" color="gray.200" _selected={{ background: "teal.600" }}>
                    <Circle size="25px" color="gray.300" bg="teal.700" mr="2">
                      <Text fontSize="xs"> {whitepapers.length}</Text>
                    </Circle>
                    whitepapers
                  </Tab>

                  {/* conferences tag */}
                  <Tab textTransform="uppercase" fontSize="xs" px={2} m={1} borderRadius="lg" color="gray.200" _selected={{ background: "teal.600" }}>
                    <Circle size="25px" color="gray.300" bg="teal.700" mr="2">
                      <Text fontSize="xs"> {onlineConferences.length}</Text>
                    </Circle>
                    conferences
                  </Tab>
                </TabList>

                <TabPanels>
                  {/* content production all content */}
                  <TabPanel py={0}>
                    {isLoading ? (
                      <Center minHeight={"400px"}>
                        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="teal.500" size="xl" />
                      </Center>
                    ) : (
                      <Grid collection={all} image="all" />
                    )}
                  </TabPanel>

                  {/* content production ebooks content */}
                  <TabPanel py={0}>
                    <Grid collection={ebooks} image="ebooks" />
                  </TabPanel>

                  {/* content production webcasts content */}
                  <TabPanel py={0}>
                    <Grid collection={webcasts} image="webcasts" />
                  </TabPanel>

                  {/* content production whitepapers content */}
                  <TabPanel py={0}>
                    <Grid collection={whitepapers} image="whitepapers" />
                  </TabPanel>

                  {/* content production conferences content */}
                  <TabPanel py={0}>
                    <Grid collection={onlineConferences} image="onlineConferences" />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>

            {/* Media Supply Chain Content */}
            <TabPanel>
              <Center minHeight="400px">
                <Text fontSize="3xl" color="white">
                  Media Supply Chain Content Goes Here
                </Text>
              </Center>
            </TabPanel>

            {/* Broadcast Content */}
            <TabPanel>
              <Center minHeight="400px">
                <Text fontSize="3xl" color="white">
                  Broadcast Content Goes Here
                </Text>
              </Center>
            </TabPanel>

            {/* D2C & Streaming Content */}
            <TabPanel>
              <Center minHeight="400px">
                <Text fontSize="3xl" color="white">
                  D2C & Streaming Content Goes Here
                </Text>
              </Center>
            </TabPanel>

            {/* Data Science & Analytics Content */}
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
        backgroundImage="linear-gradient(rgba(0,0,0, 0.7),rgba(0,0,0, 0.7)),url(https://images.unsplash.com/photo-1613031729579-ace1feefda4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
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
          <Button mt={8} size="sm" colorScheme="teal" borderRadius="sm">
            CTA Text Goes Here
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default App;
