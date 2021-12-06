import { Box, Button, Container, Heading, VStack, Icon, Image, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import logo from "../images/aws_smile-header-desktop-en-white_59x35@2x.png";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <>
      <Box as="footer" background="#232f3e" color="white">
        <Container maxWidth="1200px" py={4}>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem p={4}>
              <Heading fontSize="xl">Learn about AWS</Heading>
              <VStack mt={4} alignItems="start">
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is AWS?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is Cloud Computing?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  AWS Inclusion, Diversity & Equity
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is DevOps?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is a Container?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is a Data Lake?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  AWS Cloud Security
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What's New
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Blogs
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Press Releases
                </Text>
              </VStack>
            </GridItem>
            <GridItem p={4}>
              <Heading fontSize="xl">Resources for AWS</Heading>
              <VStack mt={4} alignItems="start">
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is AWS?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is Cloud Computing?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  AWS Inclusion, Diversity & Equity
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is DevOps?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is a Container?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What is a Data Lake?
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  AWS Cloud Security
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  What's New
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Blogs
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Press Releases
                </Text>
              </VStack>
            </GridItem>
            <GridItem p={4}>
              <Heading fontSize="xl">Developer on AWS</Heading>
              <VStack mt={4} alignItems="start">
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Developer Center
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  SDKs & Tools
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  .NET on AWS
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Python on AWS
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Java on AWS
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  PHP on AWS
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  JavaScript on AWS
                </Text>
              </VStack>
            </GridItem>
            <GridItem p={4}>
              <Heading fontSize="xl">Help</Heading>
              <VStack mt={4} alignItems="start">
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Contact Us
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  AWS Careers
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  File a Support Ticket
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Knowlege Center
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  AWS Support Overview
                </Text>
                <Text lineHeight={1.4} color="white" fontSize="sm">
                  Legal
                </Text>
              </VStack>
            </GridItem>
            <GridItem p={4}>
              <Button size="sm" colorScheme="orange" borderRadius="sm">
                Create an AWS Account
              </Button>
              <Flex mt={6} gridGap={4}>
                <QuestionOutlineIcon />
                <QuestionOutlineIcon />
                <QuestionOutlineIcon />
                <QuestionOutlineIcon />
                <QuestionOutlineIcon />
                <QuestionOutlineIcon />
              </Flex>
              <Text fontSize="sm" fontWeight="medium" mt={8}>
                Amazon is an Equal Opportunity Employer:{" "}
                <Text as="i">Minority / Women / Disability / Veteran / Gender Identity / Sexual Orientation / Age.</Text>
              </Text>
            </GridItem>
          </Grid>
          <Text mx={4} fontSize="sm">
            Language عربي Bahasa Indonesia Deutsch English Español Français Italiano Português Tiếng Việt Türkçe Ρусский ไทย 日本語 한국어 中文 (简体) 中文
            (繁體)
          </Text>
        </Container>
      </Box>
      <Box background="gray.100" py={4}>
        <Container maxWidth="1200px" px={7}>
          <Text lineHeight={1.4} color="gray.800" fontSize="sm">
            Privacy | Site Terms | Cookie Preferences | © 2021, Amazon Web Services, Inc. or its affiliates. All rights reserved.
          </Text>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
