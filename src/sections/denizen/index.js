import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { isEqual } from 'lodash';
import Card from "../../components/card";
import { getDenizenSection } from "../../features/data/dataSlice";
import {
  setDenizen,
  getPrimaryDenizenType,
  getSecondaryDenizenType
} from "../../features/choices/choicesSlice";

const DenizenTypeSection = () => {
  const { title, description, choices } = useSelector(getDenizenSection);
  const type = useSelector(getPrimaryDenizenType, (left, right) => {
    console.log(left, right, isEqual(left, right));
    return isEqual(left, right);
  });
  const secondaryType = useSelector(getSecondaryDenizenType);
  const dispatch = useDispatch();
  console.log(type, secondaryType);
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
                    picked={title === type || title === secondaryType}
                    disabled={title === secondaryType}
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
