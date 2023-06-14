import React from "react";
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";
import HeaderThree from "../Components/HeaderThree";

const Info = () => {
  return (
    <div className="w-screen h-screen pt-40 bg-rtgreen">
      <HeaderThree />
      <Grid container sx={{ justifyContent: "space-between", pl: 2 }}>
        <Grid item xs={12} md={4}>
          <div className="flex flex-col gap-2">
            <p className="font-work-sans w-[93vw] md:w-auto">
              The Sacred Tree provides nourishment in its fruits, encouraging
              positive inter-relationships among human beings within their
              physical and spiritual worlds. The leaves of the tree represent
              the birth, growth, flowering and eventual passing of generations
              of people. 
            </p>
            <p>Music sets a tone, impacts a mood, connects people,
              documents history, influences culture, and simply makes life
              better! Our fandom is serious, but we don’t take ourselves too
              seriously.</p>
            <p className="font-work-sans">All Hail Vinyl!</p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          className="flex flex-col mr-[9%] justify-between"
        >
          <div className="flex flex-col gap-2">
            <p className="font-work-sans justify-end">
              Looking for a special album, drop us a line at{" "}
              <u>hello@ritualtree.xyz</u>
            </p>
            <p className="font-work-sans">
              Instagram <u>@ritualtreexyz</u>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;
