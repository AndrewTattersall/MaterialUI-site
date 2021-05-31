import React from "react";
import Button from "@material-ui/core/Button";
import { Parallax } from "react-parallax";
import Design2 from "../images/design3.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  insideStyles: {
    padding: 15,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

const Section = () => {
  const classes = useStyles();

  return (
    <div>
      <Parallax bgImage={Design2} bgImageAlt="the cat" strength={400}>
        <div style={{ height: "350px" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.insideStyles}
          >
            Subscribe
          </Button>
        </div>
      </Parallax>
    </div>
  );
};
export default Section;
