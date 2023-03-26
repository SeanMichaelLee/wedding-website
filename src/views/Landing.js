import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CountdownTimer from '../components/CountdownTimer';
import { Box } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import Typography from "@mui/material/Typography";
import Paper from '@material-ui/core/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const backgroundVideo = '/eiffel-tower-2022-08-04-19-55-58-utc.mp4';

const styles = theme => ({
    title: {
        textAlign: 'center'
      },
      subtitle: {
        paddingBottom: theme.spacing.unit * 2,
      },
      paper: {
        paddingTop: theme.spacing.unit * 16,
        paddingBottom: theme.spacing.unit * 8,
        width: '100%',
      }
});
  
class Landing extends React.Component {
    render() {
        const { classes} = this.props;
        return (
            <Box sx={{position: 'relative'}}>
                <video id="background-video" loop autoPlay muted width="100%" height="auto">
                    <source src={backgroundVideo} type="video/mp4"/>
                    <source src={backgroundVideo} type="video/ogg"/>
                    Your browser does not support the video tag
                </video>
                <Box sx={{position: 'absolute', top: '5%', left: '20%', right: '20%'}}>
                    <CountdownTimer props={this.props} targetDate={new Date("04/24/24").getTime()} />
                </Box>
                <Paper id={'OurStory'} elevation={10} className={classes.paper}>
                    <Grid container direction='column'>
                        <Grid item xs={12}>
                            <Typography variant="h3" marked="center" className={classes.title}>
                            Our Story
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Timeline position="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right">
                                        <img src={'/college_photo.jpg'} width="50%" height="auto" alt=""/>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Grid container direction='column'>
                                        <Typography variant="h5" className={classes.subtitle}>
                                            Summer 2015 - College Sweethearts
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">As freshman at the University of Central Florida, we had mutural friends that conviced us coming out of soccer retirement was a good idea.
                                            Little did we know, the intramural soccer fields would be the kick-off of our life-long relationship. I like to think that Camille knew I was a keeper
                                            as soon as she saw how goal-oriented, but only after a few dates at UCF's dinning hall I was able to sweep Camille off her feet.
                                            For the next four years, Camille showed support and patiences with my gruelying Compute Science curriculum and I continued to motivate Camille that going to class was important.
                                        </Typography>
                                    </Grid>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    >
                                        <img src={'/home_photo.jpg'} width="50%" height="auto" alt=""/>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h5" component="span">
                                        Fall 2020 - Reunited in the State of Lovers
                                    </Typography>
                                    <Typography>Blah Blah Blah</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    >
                                        <img src={'/enagement_photo_1.jpg'} width="50%" height="auto" alt=""/>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h5" component="span">
                                        Summer 2022 - The Proposal
                                    </Typography>
                                    <Typography>Blah Blah Blah</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    >
                                        <img src={'/paris_photo.jpg'} width="50%" height="auto" alt=""/>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h5" component="span">
                                        April 24, 2024 - Celebrate Our Marriage!
                                    </Typography>
                                    <Typography>Blah Blah Blah</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        );
    }
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);