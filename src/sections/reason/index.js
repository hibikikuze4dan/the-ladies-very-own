import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card";
import { getReasonSection } from "../../features/data/dataSlice";
import {
  setEntourageRole,
  setDenizen,
  setReason,
  getReasonTitle,
} from "../../features/choices/choicesSlice";
import ReasonDialog from "./ReasonDialog";

const ReasonSection = () => {
  const { title, description, choices } = useSelector(getReasonSection);
  const reason = useSelector(getReasonTitle);
  const dispatch = useDispatch();
  const [open, toggleOpen] = useState(false);

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
                    handleClick={() => {
                      dispatch(setReason(choice));
                      if (choice.title === "Hybrid") {
                        dispatch(setEntourageRole({ secondary: "" }));
                        toggleOpen(!open);
                      } else if (choice.title === "Versatile") {
                        dispatch(setDenizen({ secondary: "" }));
                        toggleOpen(!open);
                      } else {
                        dispatch(setDenizen({ secondary: "" }));
                        dispatch(setEntourageRole({ secondary: "" }));
                      }
                    }}
                    picked={choice.title === reason}
                    {...choice}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </Grid>
      </Grid>
      <ReasonDialog open={open} type={reason} handleClose={toggleOpen} />
    </Grid>
  );
};

export default ReasonSection;
