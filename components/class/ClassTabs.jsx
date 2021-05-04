import React,{useState,useEffect} from "react";
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import TABS from "@const/class/class-tabs.json";

import LiveLecture from "./LiveLecture";
import Assignment from "./Assignment";
import HomeWork from "./HomeWork";
import {makeStyles} from "@material-ui/core";
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme)=>({
    tabs:{
        backgroundColor:"lightblue"
    },
    tabpane:{
        padding:"0px"
    }
}))
export default function ClassTabs({}){
    const router = useRouter();
    const classes = useStyles();
    const [tab, setTab] = useState(TABS.LIVE_LECTURE);
    useEffect(()=>{
        if(router.query.tab){
            setTab(router.query.tab);
        }
    },[router.query]);


    return <TabContext value={tab}>
        <TabList 
            onChange={(_,val)=>{
                router.push(`/class/room?tab=${val}`)
                //setTab(val)
            }} 
            aria-label="class assignment tabs"
            scrollButtons="on"
            variant="scrollable"
            className={classes.tabs}
        >
            <Tab label="Live Lecture" value={TABS.LIVE_LECTURE} />
            <Tab label="Assignment" value={TABS.ASSIGNMENT} />
            <Tab label="Home work" value={TABS.HOME_WORK} />
        </TabList>
        <TabPanel value={TABS.LIVE_LECTURE} className={classes.tabpane} >
            <LiveLecture/>
        </TabPanel>
        <TabPanel value={TABS.ASSIGNMENT} className={classes.tabpane} >
            <Assignment/>
        </TabPanel>
        <TabPanel value={TABS.HOME_WORK} className={classes.tabpane} >
            <HomeWork/>
        </TabPanel>
  </TabContext>
}