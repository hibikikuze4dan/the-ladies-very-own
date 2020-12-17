import { AppBar, Button, Grid, IconButton, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { ConfirmationNumber, ListAlt, Save } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    padding: '4px 0'
  }
})

const ApplicaionBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Grid container justify="space-around">
        <Button startIcon={<Save />}>
          {mdUp ? 'Save' : null}
        </Button>
        <Button startIcon={<ListAlt />}>
          {mdUp ? 'Choices' : null}
        </Button>
      </Grid>
    </AppBar>
  )
}

export default ApplicaionBar