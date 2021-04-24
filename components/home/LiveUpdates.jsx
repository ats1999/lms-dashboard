import {
    Typography, Grid
} from "@material-ui/core";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { makeStyles } from '@material-ui/core/styles';
import style from "./styles/liveUpdate.module.css";

const useStyles = makeStyles((theme)=>({
    updateContainer:{
        padding:"20px"
    },
    infoText:{
        fontSize:"12px"
    }
}))
function getDuration(time){
    const sec = (Date.now()-time)/1000;

    if(sec<60)
        return `${sec} sec ago`;
    else if(sec<(60*60))
        return `${parseInt(sec/60)} min ago`;
    else return `${parseInt(sec/(60*60))} hr ago`;     
}

function Update({heading,info,time}){
    const classes = useStyles();
    return <Grid item xs={12}>
        <p className={style.durationText}>{getDuration(time)}</p>
        <Typography color="primary" component="p" variant="h6">
           <EmojiEventsIcon color="error"/> {heading}
        </Typography>
        <Typography className={classes.infoText}>
            {info}
        </Typography>
    </Grid>
}

const data = [
    {
        heading:"Celebration Time!",
        info:"Congratulations Amitrajit Bose from October EliteX on getting an offer from Flipkart Internet Pvt Ltd",
        time:1619237839597
    },
    {
        heading:"Upcomeing class!",
        info:"Congratulations Amitrajit Bose from October EliteX on getting an offer from Flipkart Internet Pvt Ltd",
        time:1619237739597
    },
    {
        heading:"Get Ready!",
        info:"Congratulations Amitrajit Bose from October EliteX on getting an offer from Flipkart Internet Pvt Ltd",
        time:1619237829597
    },
    {
        heading:"New Job!",
        info:"Congratulations Amitrajit Bose from October EliteX on getting an offer from Flipkart Internet Pvt Ltd",
        time:1619237838593
    }
]
export default function LiveUpdates(){
    const classes = useStyles();
    return <Grid container spacing={1} className={classes.updateContainer}>
        <Typography
            color="textSecondary"
            variant="h5"
            component="p"
            align="center"
        >
            Live Updates
        </Typography>

        {data.map((data,idx)=>{
            return <Update {...data} key={idx}/>
        })}
    </Grid>
}