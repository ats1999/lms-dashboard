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
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

// custom
import QuestionTabs from "./QuestionTabs";
// style
import style from "./styles/live.module.css";
import assignmentStyle from "./styles/assignment.module.css";

const useStyles = makeStyles((theme)=>({
    liveLectureHeading:{
        fontWeight:"bold",
        display:"block"
    },
    accordion:{
        width:"100%",
        '& .MuiAccordionDetails-root':{
            display:"block",
            padding:"5px"
        },
        background:"#f0f2f5",
        '& .MuiAccordionSummary-root.Mui-expanded':{
            background:"bisque"
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

const data = [
    {
        name:"Smallest Multiple With 0 and 1",
        status:"200",
        _id:"123123"
    },
    {
        name:"Reversing Elements Of Queue",
        status:"313",
        _id:"1237823"
    },
    {
        name:"Smallest Multiple With 0 and 1",
        status:"301",
        _id:"112123"
    }
]
export default function Assignment(){
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
                    <AssignmentIcon/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <p className={style.welcomeText}>Todays Assignment! </p>
                    <p className={style.welcomeGreet}>
                    Please solve the assignment below.<br/>
                    You can Ask TA for help in case you are stuck or Seek Help from your peers while solving the assignment.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot>
                    <AssignmentTurnedInIcon/>
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
                                Assignment Instructions! <button className={assignmentStyle.helpRequestButton}><QuestionAnswerIcon fontSize="small"/> Help Requests: Raised-0 / Resolved-0 </button>
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography color="textSecondary" variant="h5" className={classes.liveLectureHeading}>
                                Assignment Instructions!
                            </Typography>

                            <div>
                                <ul>
                                    <li>
                                        All submissions are automatically checked for plagiarism, and flagged solutions might not be counted towards the total score.
                                    </li>

                                    <li>
                                        Do not hesitate to discuss the solution with your batchmates, or take help from your TAs to build intuition.
                                    </li>
                                    <li>
                                         DO NOT move on from a problem until you have understood the approach very well.
                                    </li>
                                    <li>
                                        Plagiarism would defeat the purpose of learning a new pattern and concept.
                                    </li>
                                </ul>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot>
                    <FormatListNumberedIcon/>
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
                                Assignment
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <QuestionTabs questions={data}/>
                        </AccordionDetails>
                    </Accordion>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
    </div>
}