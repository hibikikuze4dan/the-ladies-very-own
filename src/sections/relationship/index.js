import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card";
import { getRelationshipSection } from "../../features/data/dataSlice";
import {
  setRelationship,
  getRelationship,
} from "../../features/choices/choicesSlice";

const RelationshipSection = () => {
  const { title, description, choices } = useSelector(getRelationshipSection);
  const relationship = useSelector(getRelationship);
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
                    handleClick={() => dispatch(setRelationship(choice.title))}
                    picked={choice.title === relationship}
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

export default RelationshipSection;
