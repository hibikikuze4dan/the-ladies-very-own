import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card";
import { getOriginSection } from "../../features/data/dataSlice";
import {
  setOrigins,
  getOriginsTitle,
} from "../../features/choices/choicesSlice";

const OriginSection = () => {
  const { title, description, choices } = useSelector(getOriginSection);
  const origin = useSelector(getOriginsTitle);
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
                    handleClick={() => dispatch(setOrigins(choice))}
                    picked={choice.title === origin}
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

export default OriginSection;
