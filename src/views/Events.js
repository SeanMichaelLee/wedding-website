import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import 'mapbox-gl/dist/mapbox-gl.css';
import Typography from "@mui/material/Typography";

const styles = theme => ({
    title: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 16,
    },
    paper: {
        width: '100%',
        height: 'auto'
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

class Events extends React.Component {
    render() {
        const { classes} = this.props;
        return (
            <Paper elevation={10} className={classes.paper}>
                <Typography variant="h4" marked="center" className={classes.title}>
                    Work in Progress.... I have a full time job too you know.... - Sean
                </Typography>
                <div className={classes.div}><iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" title="events"></iframe></div>
            </Paper>
        );
    }
}

Events.propTypes = {
    classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Events);