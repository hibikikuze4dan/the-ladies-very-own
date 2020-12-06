import {
  Button,
  Divider,
  Grid,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card";
import { getTalents, getTalentsShown, getTalentsTitles, setTalentsShown, updateTalents } from "../../features/choices/choicesSlice";
import { getCurrentTalentsSection } from "../../features/data/dataSlice";

const talentTypes = ["Knight", "Headservant", "Chamberlain", "Hidden Blade"];

const TalentsSection = () => {
  const dispatch = useDispatch()
  const talentsShown = useSelector(getTalentsShown);
  const section = useSelector(getCurrentTalentsSection);
  const currentTalents = useSelector(getTalentsTitles);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography>Talents</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          This is the talent section. Class talents can only be spent in the section matching your choice of class, while special talents can only be spent in sections that do not match that choice. Both types of talents can be spent in the section selected with Versatile.
          <br />
          <br />
          Gain a class talent to expend on this section.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {talentTypes.map((talent, index) => {
            return (
              <Grid item xs={6} key={`Grid-PerksButtons-${index}`}>
                <Button
                  onClick={() => dispatch(setTalentsShown(talent))}
                  fullWidth
                  style={{
                    backgroundColor: talentsShown === talent ? "green" : "white",
                  }}
                  variant="outlined"
                >
                  {talent}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Typography>{section.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <GridList>
            {section.choices.map((choice, index) => {
              const { title } = choice;
              return (
                <GridListTile key={`grid-list-tile-${index}`}>
                  <Card
                    handleClick={() =>
                      dispatch(
                        updateTalents({
                          ...choice,
                          type: talentsShown,
                        })
                      )
                    }
                    picked={currentTalents.includes(title)}
                    {...choice}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default TalentsSection
