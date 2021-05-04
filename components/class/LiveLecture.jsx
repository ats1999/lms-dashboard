import React from "react";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core";

// icons
import SpaIcon from '@material-ui/icons/Spa';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

// style
import style from "./styles/live.module.css";

const useStyles = makeStyles((theme)=>({
    liveLectureHeading:{
        fontWeight:"bold",
        display:"block"
    },
    accordion:{
        '& .MuiAccordionDetails-root':{
            display:"block"
        }
    },timeline:{
        '& .MuiTimelineItem-missingOppositeContent:before':{
            flex:"0",
            padding:0,
            backgroundColor:"red"
        },
        '& .MuiTimelineContent-root':{
            padding:"10px 5px 10px 5px"
        },
        [theme.breakpoints.down('xs')]:{
            padding:"6px 0px"
        }
    }
}))
export default function LiveLecture(){
    const classes = useStyles();
    const [accordionPanel, setAccordionPanel] = React.useState("lecture");
    
    const handlePanelChange=(panel)=>{
        // collapse the current panel
        setAccordionPanel(accordionPanel===panel?null:panel);
    }
    return <div>
        <Timeline align="left" className={classes.timeline}>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot>
                    <SpaIcon/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <p className={style.welcomeText}> Welcome to day-50 Live Lecture! </p>
                    <p className={style.welcomeGreet}>
                        In this hour you will learn about today’s topic through a live sessions from our highly qualified lecturer. Go through the pre-lecture content. It will help you in understanding the lessons in the lecture better.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot>
                    <LiveTvIcon/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Accordion 
                        expanded = {accordionPanel === "lecture"}
                        onChange = {()=>handlePanelChange("lecture")}
                        className={classes.accordion}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography>
                                Live lecture session!
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography color="textSecondary" variant="h5" className={classes.liveLectureHeading}>
                                Live lecture session!
                            </Typography>

                            <Typography >
                                In this hour you will learn about today’s topic through a live sessions from our highly qualified lecturer. 
                            </Typography>

                            <div className={style.joinContainer}>
                                <a href="#joining" target="_blank">
                                    Watch Recorded Session
                                </a>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot>
                    <LiveHelpIcon/>
                </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Accordion 
                        expanded = {accordionPanel === "extra"}
                        onChange = {()=>handlePanelChange("extra")}
                        className={classes.accordion}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography>
                                Extra Reference Material!
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <div>
                                <p>Notes (Please download on your system as well)</p>
                                <a href="#notes" target="_blank">Download</a>
                                <br/>
                            </div>

                            <div>
                                <hr/>
                                <p>Extra Reference Material!</p>
                                <a href="#notes" target="_blank">Download</a><br/>
                                <a href="#notes" target="_blank">Download1</a><br/>
                                <a href="#notes" target="_blank">Download2</a>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
    </div>
}