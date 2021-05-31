import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles } from "@material-ui/core";
import Hero from "../images/hero.jpg";

const useStyles = makeStyles({
  hero: {
    height: "95vh",
    backgroundImage: `url(${Hero})`,
    display: "flex",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    paddingTop: 120,
  },
  title: {
    fontWeight: 500,
  },
});

const AboutSection = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.hero} maxWidth="sm">
        <Box m={2} p={2}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Social Agency
            <br />& Branding Experts
          </Typography>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default AboutSection;
