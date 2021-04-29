import React from 'react';
import Typography  from "@material-ui/core/Typography";
import Link from "next/link";
import style from "./styles/incomplete.module.css";
import ScrollButtons from "@components/util/onclick-scroll-buttons/ScrollButtons";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    removeIcon:{
        position:"absolute",
        top:"5px",
        right:"5px"
    },
    playIcon:{
        position:"absolute",
        top:"70px",
        left:"145px"
    }
}))

const data = [
    {
    title:"Pattern searching algorithm",
    date:"31 Mar 2021",
    url:"#Pattern searching algorithm",
    bg:"#4bca5e"
},
{
    title:"Bit Manipulations",
    date:"01 Mar 2021",
    url:"#Bit Manipulations",
    bg:"lightgreen"
}
]

function Event({title,date,url,...rest}){
    const classes = useStyles();
    return <Link href={url}>
        <div className={`flexItemsScrollableHorizontal ${style.item}`}
            style={{
                backgroundColor:rest.bg
            }}
        >
            <PlayCircleFilledIcon className={classes.playIcon}/>
            <CloseIcon className={classes.removeIcon}/>
            <p className={style.title}>{title}</p>
            <p className={style.date}>{date}</p>
        </div>
    </Link>
}

function ContinueInCompleteEvents() { 
    return (
        <div className={`${style.incompleteEvents}`}>
            <ScrollButtons containerId="incomplete__container"/>
            <Typography
                color="textPrimary"
                variant="h4"
                component="p"
            >
                Continue InComplete Events
            </Typography>

            <div id="incomplete__container" className={`flexContainer`}>
                {[...data,...data,...data].map((event,idx)=>{
                    return <Event {...event} key={idx}/>
                })}
            </div>
        </div>
    )
}

export default ContinueInCompleteEvents
