import { Children, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <Box background="radial-gradient(circle, rgba(35,47,62,1) 59%, rgba(61,73,88,1) 100%)" minHeight="100vh">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
