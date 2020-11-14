import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getGenderSection } from "../../features/data/dataSlice";

const GenderSection = () => {
  const { title, description, choices } = useSelector(getGenderSection);
  console.log(choices);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {description.map((sec, ind) => {
            return (
              <span>
                {sec}
                <br />
                <br />
              </span>
            );
          })}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GenderSection;
