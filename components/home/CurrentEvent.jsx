import style from "./styles/currentEvent.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Countdown from "react-countdown";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "50px",
        backgroundColor: "#e7f3ff",
        padding: "10px",
        borderRadius: "10px",
    },
    viewEventButton: {
        backgroundColor: "#e23f5b",
        padding: "7px",
        paddingLeft: "50px",
        paddingRight: "50px",
        borderRadius: "10px",
        color: "black",
        fontWeight: "bold",
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
            paddingLeft: "25px",
            paddingRight: "25px",
        },
    },
    timerContainer: {
        display: "flex",
    },
    dateTimeContainer: {
        display: "flex",
        "& p": {
            marginLeft: "5px",
        },
    },
}));

function DefaultEvent() {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.container}>
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
    );
}

function Event({ name, type, date, time, eventDateTime }) {
    const classes = useStyles();
    return (
        <Grid container spacing={0} className={classes.container}>
            <Grid item sm={5} xs={12}>
                <img
                    src="https://res.cloudinary.com/dun9j2psp/image/upload/v1619437232/lsm/home/undraw_developer_activity_bv83_iwbly6.svg"
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
                <Grid item xs={12} className={classes.dateTimeContainer}>
                    <p>
                        <EventIcon size="small" color="primary" />
                        &nbsp;{date}
                    </p>
                    <p>
                        <ScheduleIcon color="error" />
                        &nbsp;{time}
                    </p>
                </Grid>

                {/* view event button and count down timer */}
                <Grid item xs={12} className={classes.timerContainer}>
                    <Button className={classes.viewEventButton}>View Event</Button>
                    <div className={style.countDownTimer}>
                        <p>Starts In</p>
                        <Countdown date={eventDateTime} />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default function CurrentEvent(props) {
    if (!props.name || !props.type || !props.date || !props.time) return <DefaultEvent />;

    return <Event {...props} />;
}
