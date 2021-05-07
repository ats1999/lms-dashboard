import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import TSM from "./TSMClasses";

export default function AllClassesTabs() {
    const router = useRouter();
    const [tab, setTab] = useState("tsm");

    useEffect(() => {
        setTab(router.query.tab ? router.query.tab : "tsm", false, {
            scroll: false,
            shallow: true,
        });
    }, []);

    return (
        <TabContext value={tab}>
            <TabList
                aria-label="class assignment tabs"
                scrollButtons="on"
                variant="scrollable"
                onChange={(_, val) => {
                    setTab(val);
                    router.push(`/class/all?tab=${val}&panel=${router.query.panel ?? 0}`);
                }}
            >
                <Tab label="TSM Classes" value={"tsm"} />
                <Tab label="Master Classes" value={"master"} />
                <Tab label="Community Classes" value={"community"} />
                <Tab label="Other Classes" value={"other"} />
            </TabList>
            <TabPanel value={"tsm"}>
                <TSM />
            </TabPanel>
            <TabPanel value={"master"}>Master Classes (Comeing Soon)</TabPanel>
            <TabPanel value={"community"}>Community Classes (Comeing Soon)</TabPanel>
            <TabPanel value={"other"}>Other Classes (Comeing Soon)</TabPanel>
        </TabContext>
    );
}
