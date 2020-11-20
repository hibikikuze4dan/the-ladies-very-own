import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card";
import { getDenizenSection } from "../../features/data/dataSlice";
import {
  setDenizen,
  getPrimaryDenizenType,
} from "../../features/choices/choicesSlice";

const DenizenTypeSection = () => {
  const { title, description, choices } = useSelector(getDenizenSection);
  const type = useSelector(getPrimaryDenizenType);
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
              const { title } = choice;
              return (
                <GridListTile key={`grid-list-tile-${index}`}>
                  <Card
                    handleClick={() => dispatch(setDenizen({ primary: title }))}
                    picked={title === type}
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

export default DenizenTypeSection;
