import {
  Divider,
  Grid,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card";
import {
  updateHobbies,
  getHobbiesTitles,
} from "../../features/choices/choicesSlice";
import {
  getHobbiesSection,
} from "../../features/data/dataSlice";

const HobbiesSection = () => {
  const dispatch = useDispatch();
  const { title, description, choices } = useSelector(getHobbiesSection);
  const currentHobbies = useSelector(getHobbiesTitles);

  return (
    <Grid container spacing={4}>
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
      <Divider />
      <Grid item xs={12}>
        <Grid container>
          <GridList>
            {choices.map((choice, index) => {
              return (
                <GridListTile key={`grid-list-tile-${index}`}>
                  <Card
                    handleClick={() => dispatch(updateHobbies(choice))}
                    picked={currentHobbies.includes(choice.title)}
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

export default HobbiesSection;
