import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 0,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  toolbar: theme.mixins.toolbar,
  appbar: {
    backgroundColor: "whitesmoke",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Social Agency
          </Typography>
          <Button>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Button>
          <Button>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </Button>
          <Button>
            <Link color="inherit" to="/contact" className={classes.link}>
              Contact
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
