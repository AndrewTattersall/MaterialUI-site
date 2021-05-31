import { Box, Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardService from "./CardService";
import Branding from "../images/branding.jpg";
import Seo from "../images/seo.jpg";
import Design from "../images/laptop.jpg";

const OurWorkSection = () => {
  return (
    <Container>
      <Box my={3} py={3}>
        <Typography align="center" variant="h3" gutterBottom>
          Our Services
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <CardService title={"Branding"} image={Branding} />
        <CardService title={"Design"} image={Design} />
        <CardService title={"SEO"} image={Seo} />
      </Grid>
    </Container>
  );
};

export default OurWorkSection;
