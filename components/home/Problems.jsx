import { useState } from "react";
import SpeedIcon from "@material-ui/icons/Speed";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import style from "./styles/problems.module.css";
import ScrollButtons from "@components/util/onclick-scroll-buttons/ScrollButtons";
import STATUS from "@const/home/problems.json";
import Link from "next/link";
/*
    tab 0 - Recently attempted
    tab 1 - Bookmarked
    tab 2 - Recently Added
*/

const data = [
    {
        title: "Sort By Color",
        status: STATUS.ATTEMPTED,
        score: "200",
        url: "#Sort By Color",
    },
    {
        title: "Sort By Color",
        status: STATUS.NOT_ATTEMPTED,
        score: "200",
        url: "#Sort By Color",
    },
    {
        title: "Palindrome",
        status: STATUS.ANSWERED,
        score: 500,
        url: "#ansd",
    },
];

function getStatusClassText(status) {
    switch (status) {
        case STATUS.ATTEMPTED:
            return {
                text: "Attempted",
                className: style.attempted,
            };
        case STATUS.NOT_ATTEMPTED:
            return {
                text: "Not Attempted",
                className: style.notAttempted,
            };

        case STATUS.ANSWERED:
            return {
                text: "Answered",
                className: style.answered,
            };
    }
}

function Problem({ title, status, score, url }) {
    const { className, text } = getStatusClassText(status);
    return (
        <div className={`flexItemsScrollableHorizontal ${style.item}`}>
            <Link href={url}>
                <div className={style.itemInfo}>
                    <p className={style.title}>{title}</p>
                    <div className={style.statusScore}>
                        <span className={`${className} ${style.statusText}`}>{text}</span>
                        <span className={style.score}>
                            <SpeedIcon />
                            &nbsp;score:{score}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
function ProblemsList({ data }) {
    return (
        <div id="problems__container" className={`flexContainer`}>
            {data.map((problem, idx) => {
                return <Problem {...problem} key={idx} />;
            })}
        </div>
    );
}

function Problems() {
    const [tab, setTab] = useState("0");
    return (
        <div className={style.problems}>
            {/* <ScrollButtons containerId="problems__container"/> */}
            <Typography color="textPrimary" variant="h4" component="p">
                Problems&nbsp;&nbsp;
                <Link href="#all__problems">
                    <a className={style.allUrl}>View All</a>
                </Link>
            </Typography>

            <TabContext value={tab}>
                <TabList
                    onChange={(_, newVal) => {
                        setTab(newVal);
                    }}
                    aria-label="Problems tabs"
                    scrollButtons="on"
                    variant="scrollable"
                >
                    <Tab label="Recently attempted" value="0" />
                    <Tab label="Bookmarked" value="1" />
                    <Tab label="Recently Added" value="2" />
                </TabList>
                <TabPanel value="0">
                    <ProblemsList data={[...data, ...data, ...data]} />
                </TabPanel>
                <TabPanel value="1">
                    <ProblemsList data={data} />
                </TabPanel>
                <TabPanel value="2">
                    <ProblemsList data={[...data, ...data, ...data]} />
                </TabPanel>
            </TabContext>
        </div>
    );
}

export default Problems;
