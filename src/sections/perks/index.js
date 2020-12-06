import {
  Button,
  Divider,
  Grid,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPerks,
  getPerksShown,
  getPerksTitles,
  setPerksShown,
  updatePerks,
} from "../../features/choices/choicesSlice";
import {
  getCurrentPerkSection,
  getPerksSections,
} from "../../features/data/dataSlice";
import Card from "../../components/card";

const perkTypes = ["Human", "Vampire", "Lycanthrope", "Stranger"];

const PerksSection = () => {
  const perksShown = useSelector(getPerksShown);
  const section = useSelector(getCurrentPerkSection);
  const currentPerks = useSelector(getPerksTitles);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography>Perks</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          This is the perk section, Normal perks can only be spent in the
          section matching your choice of species, while altered perks can only
          be spent in sections that do not match that choice. Both types of
          perks can be spent in the section selected with Hybrid.
          <br />
          <br />
          Gain a normal perk to spend in this section.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {perkTypes.map((perk, index) => {
            return (
              <Grid item xs={6} key={`Grid-PerksButtons-${index}`}>
                <Button
                  onClick={() => dispatch(setPerksShown(perk))}
                  fullWidth
                  style={{
                    backgroundColor: perksShown === perk ? "green" : "white",
                  }}
                >
                  {perk}
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
                        updatePerks({
                          ...choice,
                          type: perksShown,
                        })
                      )
                    }
                    picked={currentPerks.includes(title)}
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

export default PerksSection;
