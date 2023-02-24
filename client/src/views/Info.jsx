import React from "react";
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";

const Info = () => {
  return (
    <Grid container>
      <Grid xs={4}>
        <p>
          Music sets a tone, impacts a mood, connects people, documents history,
          influences culture, and simply makes life better! Our fandom is
          serious, but we don’t take ourselves too seriously. 
        </p>
        <p>
        All Hail Vinyl!
        </p>
      </Grid>
      <Grid xs={4}>

      </Grid>
      <Grid xs={4} >
        <p>
          Looking for a special album, drop us a line at hello@ritualtree.xyz
        </p>
        <p>Instagram @ritualtreexyz</p>
      </Grid>
    </Grid>
  );
};

export default Info;
