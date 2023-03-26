import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@mui/material/Typography";

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'visible',
    backgroundColor: theme.palette.primary.main,
    flexDirection: 'column',
    alignItems: 'left',
  },
  title: {
    textAlign: 'left',
    color: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
        <Typography variant="h6" align="center" marked="center" className={classes.title}>
          Built and Designed by Sean Lee
        </Typography>
    </section>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);