import { Button, Card as MUICard, Typography, Grid } from "@material-ui/core";
import React from "react";

const Card = ({ handleClick, title, description, picked, disabled }) => {
  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      style={{
        backgroundColor: picked ? "green" : "white",
      }}
    >
      <MUICard
        style={{
          backgroundColor: "inherit",
        }}
      >
        <Grid>
          <Typography>{title}</Typography>
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
      </MUICard>
    </Button>
  );
};

Card.defaultProps = {
  picked: false,
  disabled: false,
};

export default Card;
