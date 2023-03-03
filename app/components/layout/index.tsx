import { Center, Grid, GridItem } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import type { TLayout } from "./types";

const Layout: React.FC<TLayout> = ({ children }) => {
  return (
    <Grid templateAreas={`"header" "main" "footer"`} className="main">
      <GridItem area="header" className="header" bg="#20202380">
        <Header />
      </GridItem>
      <GridItem area="main">
        <Center flexDirection="column">{children}</Center>
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
