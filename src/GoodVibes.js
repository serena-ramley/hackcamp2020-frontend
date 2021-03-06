import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

import Grid from "@material-ui/core/Grid";
import Typography from "./Typography";

import hippo from "./hippo.svg";
import logo from "./HappyHippo.svg";

import Box from "./Box";
import ParagraphEntry from "./ParagraphEntry";
import BackgroundBox from "./BackgroundBox";
import SelectEmployee from "./SelectEmployee";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  send: {
    backgroundColor: "#FFD600",
    "&:hover": {
      backgroundColor: "#FFD600",
    },
  },
}));

const GoodVibes = () => {
  const classes = useStyles();
  const [employeeId, setEmployeeId] = useState("");
  const [message, setMessage] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);

  const employees = [
    { id: "employee-100", name: "Jane Doe" },
    { id: "employee-2", name: "Moby Dick" },
    { id: "employee-102", name: "Leroy Syndrome" },
  ];

  const name = employees.find((x) => x.id === employeeId)?.name || "";

  const handleSubmit = () => {
    setShowSnackBar(true);
  };

  return (
    <>
      <Grid container spacing={15} direction="column">
        <Grid item>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>

        <Grid container item spacing={2} direction="row" alignItems="center">
          <Grid item>
            <Box>
              Yay, I am glad that you are feeling good. Let's share this
              positive vibe with others.
            </Box>
          </Grid>
          <Grid item>
            <img src={hippo} className="App-logo" alt="hippo" />
          </Grid>
        </Grid>

        <Grid item>
          <BackgroundBox>
            <form className={classes.root}>
              <Grid container spacing={15} direction="column">
                <Grid item>
                  <Typography>Message a coworker!</Typography>
                </Grid>
                <Grid item>
                  <SelectEmployee onChange={setEmployeeId} />
                </Grid>
                <Grid item>
                  <Typography>Write a positive message!</Typography>
                </Grid>
                <Grid item>
                  <ParagraphEntry onChange={setMessage} />
                </Grid>
              </Grid>
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
                classes={{ root: classes.send }}
              >
                Send
              </Button>
            </form>
          </BackgroundBox>
        </Grid>
      </Grid>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        message={`You sent ${name} a message!`}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={(event) => {
              event.preventDefault();
              setShowSnackBar(false);
            }}
          >
            Undo
          </Button>
        }
      />
    </>
  );
};

export default GoodVibes;
