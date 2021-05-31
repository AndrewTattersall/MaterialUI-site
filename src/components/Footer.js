import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "40px",
    backgroundColor: "whitesmoke",
    padding: "10px",
  },
  toolbar: theme.mixins.toolbar,
  appbar: {
    backgroundColor: "whitesmoke",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.footer}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 Social Agency Site
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
