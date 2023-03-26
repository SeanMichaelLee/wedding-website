import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  link: {
    marginLeft: theme.spacing.unit * 3,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.right}>
            <Link variant="h6" color="inherit" className={classes.link} href='/#OurStory'>
              Our Story
            </Link>
            <Link variant="h6" color="inherit" className={classes.link} href="/events">
              Events
            </Link>
            <Link variant="h6" color="inherit" className={classes.link} href="/photos">
              Photos
            </Link>
            <Link variant="h6" color="inherit" className={classes.link} href="/thingstodo">
              Things to do
            </Link>
            <Link variant="h6" color="inherit" className={classes.link} href="/registry">
              Registry
            </Link>
            <Link variant="h6" color="inherit" className={classes.link} href="/rsvp">
              RSVP
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);