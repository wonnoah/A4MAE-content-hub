import { useState } from "react";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box as="header" background="#232f3e">
      <Container maxWidth="full" pl="30px" pr="40px">
        <Grid templateColumns="89px 1fr" gap={6}>
          <GridItem colSpan={1} bg="yellow">
            <Text color="red">Logo</Text>
          </GridItem>
          <GridItem colSpan={1} bg="green">
            <Text color="white">Console Navigation</Text>
          </GridItem>
          <GridItem colSpan={2} bg="green">
            <Text color="white">Main Navigation</Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
