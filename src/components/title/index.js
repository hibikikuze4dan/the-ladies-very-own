import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Title = () => {
  return (
    <Grid container style={{ padding: '16px 0'}} justify="center">
      <Typography variant="h2">The Lady's Very Own Interactive CYOA</Typography>
    </Grid>
  );
};

export default Title;
