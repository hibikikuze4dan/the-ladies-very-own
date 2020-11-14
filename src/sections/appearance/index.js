import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card";
import { getAppearanceSection } from "../../features/data/dataSlice";
import {
  setAppearance,
  getAppearanceTitle,
} from "../../features/choices/choicesSlice";

const AppearanceSection = () => {
  const { title, description, choices } = useSelector(getAppearanceSection);
  const appearance = useSelector(getAppearanceTitle);
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
              return (
                <GridListTile key={`grid-list-tile-${index}`}>
                  <Card
                    handleClick={() => dispatch(setAppearance(choice))}
                    picked={choice.title === appearance}
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

export default AppearanceSection;
