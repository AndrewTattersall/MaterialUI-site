import React from "react";
import ContactUs from "../components/ContactUs";
import { Box, makeStyles } from "@material-ui/core";
import Hero3 from "../images/design3.jpg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "95vh",
    backgroundImage: `url(${Hero3})`,
    display: "flex",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    paddingTop: 120,
    marginBottom: 50,
  },
  title: {
    fontWeight: 500,
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.hero} maxWidth="sm">
        <Box m={2} p={2}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Get in touch
            <br />
            and let's
            <br />
            discuss your project
          </Typography>
        </Box>
      </div>
      <ContactUs />
    </React.Fragment>
  );
};

export default Contact;
