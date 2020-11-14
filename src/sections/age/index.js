import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card";
import { getAgeSection } from "../../features/data/dataSlice";
import { setAge, getAgeTitle } from "../../features/choices/choicesSlice";

const AgeSection = () => {
  const { title, description, choices } = useSelector(getAgeSection);
  const age = useSelector(getAgeTitle);
  const dispatch = useDispatch();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {description.map((sec, ind) => {
            return (
              <span key={`desc-${ind}`}>
                {sec}
                <br />
                <br />
              </span>
            );
          })}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <GridList>
            {choices.map((choice, index) => {
              console.log(choice, age);
              return (
                <GridListTile key={`grid-list-tile-${index}`}>
                  <Card
                    handleClick={() => dispatch(setAge(choice))}
                    picked={choice.title === age}
                    {...choice}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AgeSection;
