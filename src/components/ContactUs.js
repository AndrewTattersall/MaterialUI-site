import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  contact: {
    width: "80vw",
  },
});

const ContactUs = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setMessageError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (message == "") {
      setMessageError(true);
    }

    if (email && message) {
      console.log(email, message);
    }
  };

  return (
    <Container className={classes.contact}>
      <Box my={3} py={3}>
        <Typography align="center" variant="h3" gutterBottom>
          Contact Us
        </Typography>
      </Box>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={emailError}
        />
        <TextField
          onChange={(e) => setMessage(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          error={messageError}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactUs;
