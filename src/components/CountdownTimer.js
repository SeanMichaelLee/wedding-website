import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@mui/material/Typography";
import { Grid } from '@mui/material';

const styles = theme => ({
});

const ExpiredNotice = () => {
  return (
    <Typography color="common.white" variant="h1">
        Time to Party!
    </Typography>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Grid container alignItems="center" direction="column" spacing={10}>
        <Grid item direction="column">
            <Typography color="common.white" align="center" variant="h2">Sean & Camille</Typography>
            <Typography color="common.white" align="center" variant="h6">April 24, 2024 | Paris, France</Typography>
        </Grid>
        <Grid item direction="column">
            <Grid container direction="row">
                <Grid direction="column">
                    <Typography color="common.white" align="center" variant="h2">{days}</Typography>
                    <Typography color="common.white" align="center" variant="h4">Days</Typography>
                </Grid>
                <Typography  color="common.white" variant="h2">:</Typography>
                <Grid direction="column">
                    <Typography color="common.white" align="center" variant="h2">{hours}</Typography>
                    <Typography color="common.white" align="center" variant="h4">Hours</Typography>
                </Grid>
                <Typography color="common.white" variant="h2">:</Typography>
                <Grid direction="column">
                    <Typography color="common.white" align="center" variant="h2">{minutes}</Typography>
                    <Typography color="common.white" align="center" variant="h4">Minutes</Typography>
                </Grid>
                <Typography color="common.white" variant="h2">:</Typography>
                <Grid direction="column">
                    <Typography color="common.white" align="center" variant="h2">{seconds}</Typography>
                    <Typography color="common.white" align="center" variant="h4">Seconds</Typography>
                </Grid>
            </Grid>
        </Grid>
        
    </Grid>
  );
};

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
        );
    }
};

export default withStyles(styles)(CountdownTimer);