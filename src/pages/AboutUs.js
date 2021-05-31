import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import HomeIcon from "@material-ui/icons/Home";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Hero2 from "../images/design1.jpg";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  hero: {
    height: "95vh",
    backgroundImage: `url(${Hero2})`,
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

export default function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.hero} maxWidth="sm">
        <Box m={2} p={2}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Specialists in
            <br />
            Social Media
            <br />& Branding
          </Typography>
        </Box>
      </div>
      <Typography align="center" variant="h3" gutterBottom>
        Our Story
      </Typography>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2014
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <LaptopChromebookIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Founded
              </Typography>
              <Typography>First office in Manchester</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2017
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <EmojiEventsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Tech Innovator award
              </Typography>
              <Typography>Winner of top innovator at Tech awards</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2019
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <HomeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                New office in London
              </Typography>
              <Typography>Brand new office in Shoreditch</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <PersonAddOutlinedIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Doubled growth in one year
              </Typography>
              <Typography>Expanded team size to 15</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2021
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <TrendingUpIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Tripled our client base
              </Typography>
              <Typography>
                Offering our services to more clients than ever
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
