import React from 'react';
import {MapProvider} from 'react-map-gl';
import MapControls from '../hooks/mapControls';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import 'mapbox-gl/dist/mapbox-gl.css';

const styles = theme => ({
      paper: {
        width: '100%',
        height: 'auto'
      }
  });

class ThingsToDo extends React.Component {
    render() {
        const { classes} = this.props;
        return (
            <Paper elevation={10} className={classes.paper}>
                <MapProvider>
                    <MapControls/>
                </MapProvider>
            </Paper>
        );
    }
}

ThingsToDo.propTypes = {
    classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(ThingsToDo);