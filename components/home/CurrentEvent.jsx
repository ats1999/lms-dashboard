import style from "./styles/currentEvent.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Countdown from "react-countdown";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    container:{
        marginTop:"50px",
        backgroundColor:"#e7f3ff",
        padding:"10px",
        borderRadius:"10px"
    },
    viewEventButton:{
        backgroundColor:"#e23f5b",
        padding:"15px",
        paddingLeft:"50px",
        paddingRight:"50px",
        borderRadius:"10px",
        color:"black",
        fontWeight:"bold",
        [theme.breakpoints.down('sm')]:{
            padding:"10px",
            paddingLeft:"25px",
            paddingRight:"25px"
        }
    }
}))

function DefaultEvent(){
    const classes = useStyles();
    return <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={4}>
            <img 
                src="https://res.cloudinary.com/dun9j2psp/image/upload/v1619210380/lsm/home/undraw_No_data_re_kwbl_h5jyar.svg"
                alt="No-event-today"
                className={style.eventImage}
            />
        </Grid>
        
        <Grid item xs={12} sm={8}>
            <h5 className={style.eventType}>Upcoming Event</h5>
            <p className={style.eventName}>No Event</p>
        </Grid>
    </Grid>
}


function Event({name,type,date,time,eventDateTime}){
    const classes = useStyles();
    return <Grid container spacing={2} className={classes.container}>
        <Grid item sm={5} xs={12}>
            <img 
                src="https://res.cloudinary.com/dun9j2psp/image/upload/v1619212030/lsm/home/undraw_teaching_f1cm_e6zruf.svg"
                alt={name}
                className={style.eventImage}
            />
        </Grid>
        
        <Grid container item xs={12} sm={7}>
            <Grid item xs={12}>
                <h5 className={style.eventType}>{name}</h5>
                <p className={style.eventName}>{type}</p>
            </Grid>

            {/* time and date */}
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <EventIcon size="small" color="primary" />&nbsp;{date}
                    </Grid>
                    <Grid item xs={8}>
                        <ScheduleIcon/>&nbsp;{time}
                    </Grid>
                </Grid>
            </Grid>

            {/* view event button and count down timer */}
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={7}>
                        <Button
                            className={classes.viewEventButton}
                        >
                            View Event
                        </Button>
                    </Grid>
                    <Grid item xs={5}>
                        <div className={style.countDownTimer}>
                            <p>Starts In</p>
                            <Countdown date={eventDateTime}/>
                        </div>
                    </Grid>
                </Grid>    
            </Grid>
        </Grid>
    </Grid>
}
export default function CurrentEvent(props){
    if(!props.name || !props.type || !props.date || !props.time)
        return <DefaultEvent/>;

    return <Event {...props}/>
}