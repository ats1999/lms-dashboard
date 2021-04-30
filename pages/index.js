import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CurrentEvent from "@components/home/CurrentEvent";
import Performance from "@components/home/Performance";
import LiveUpdates from "@components/home/LiveUpdates";
import UpcomeingEvents from "@components/home/UpcomeingEvents";
import PendingActions from "@components/home/PendingActions";
import ContinueInCompleteEvents from "@components/home/ContinueInCompleteEvents";
import Problems from "@components/home/Problems";

import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    performanceContainer:{
        backgroundColor:"#dbecfd",
        padding:"20px",
        borderRadius:"10px"
    },
    root:{
        width:"100%"
    }
}))

export default function Index(){
    const classes = useStyles();
    return <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12}>
            <Typography 
                variant="h3"
                component="h1"
                align="center"
                color="primary"
            >
                LMS Dashboard
            </Typography>
        </Grid>
        <Grid item sm={12} md={8}>
            <CurrentEvent
                name="Live class"
                type="Lab Session"
                date="Fri, 24 Apr"
                time="08:00 PM"
                eventDateTime={Date.now()+1500000}
            />
            <UpcomeingEvents/>
            {/* <PendingActions/>
            <ContinueInCompleteEvents/>
            <Problems/> */}
        </Grid>
        <Grid item sm={12} md={4} className={classes.performanceContainer}>
            <Performance
                Attendance={70}
                psPercent={25}
            />

            <hr/>
            <LiveUpdates/>
        </Grid>
    </Grid>
}