import React from "react";
import Grid from "@material-ui/core/Grid";
import history from "./history";

import logo from "./HappyHippo.svg";

import Box from "./Box";
import BackgroundBox from "./BackgroundBox";
import Button from "./Button";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={15} direction="column">
        <Grid item>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        <Grid item>
          {
            // Add Grid code here}
          }
          <Box />
        </Grid>
        <Grid item>
          <BackgroundBox>
            <Button
              onClick={(event) => {
                event.preventDefault();
                history.push("/goodVibes");
              }}
            />
          </BackgroundBox>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
