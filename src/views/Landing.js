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
                                        <Typography variant="body1" color="text.secondary">As freshman at the University of Central Florida, Camille and Sean had mutual friends that convinced them coming out of soccer retirement was a good idea. Little did they know the intramural soccer fields would be the kick-off of their life-long relationship. A few dates at the UCF dinning hall, was all it took for them to dive head first into dating. It’s true opposites attract, while Camille was studying wine tasting and theme park design, Sean was spending long days studying computational algorithms and machine learning. While Camille graduated and landed her first big job in South Florida. Sean continued mastering computer science at UCF. Sean and Camille were forced to have a long distance relationship, which meant for the first time ever Sean had to do his own laundry. 
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
                                    <Typography variant="h5" className={classes.subtitle}>
                                        Fall 2020 - Reunited in the State of Lovers
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">After distance made the heart grow founder, Sean decided to accept a job even further away in Washington DC. Camille didn’t want to miss out on an opportunity to experience seasons, so she packed her bag and found a new job in Washington DC six months later. After reuniting in the State of Lovers, Sean and Camille decided to become business partners and buy their first home. Sean and Camille are now convinced that if home ownership won’t test your relationship, building Ikea furniture will.</Typography>
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
                                    <Typography variant="h5" className={classes.subtitle}>
                                        Summer 2022 - The Proposal
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">With the blessing of Camille’s parents, but a single contingency of Sean getting a Costco membership  (which he still doesn’t have). Sean started to plan the proposal. Camille always dropped “subtle” hints about getting proposed to in France. Luckily, Sean and Camille were taking a trip to France. Sean surprised Camille, with a drive to watch the sunrise over the Mediterranean. Sean got down on one knew and blacked out, but it started with “Camille ma Cherie” and ended with oui. </Typography>
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
                                    <Typography variant="h5" className={classes.subtitle}>
                                        April 24, 2024 - Celebrate Our Marriage!
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">One of Camille and Sean’s favorite hobbies is to travel, and their favorite city is Paris, so what better way to celebrate their marriage than to bring everyone to their favorite destination! It just so happens, that both Sean and Camille have family that have lived in or around Paris, which makes it a meaningful destination for not only Sean and Camille, but also their families. We are excited to celebrate with everyone and explore Paris! </Typography>
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