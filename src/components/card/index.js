import { Button, Card as MUICard, Typography, Grid } from "@material-ui/core";
import React from "react";

const Card = ({ handleClick, title, description }) => {
  return (
    <Button>
      <MUICard>
        <Grid>
          <Typography>{title}</Typography>
          <Typography>
            {description.map((sec, ind) => {
              return (
                <span>
                  {sec}
                  <br />
                  <br />
                </span>
              );
            })}
          </Typography>
        </Grid>
      </MUICard>
    </Button>
  );
};

export default Card;
