import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
let data = [
    {
        topic: "DBMS 5,DBMS 4,DBMS 3",
        schedule: [
            {
                date: new Date(),
                topic: "DBMS 5",
                activity: ["LIVE CLASS", "ASSIGNMENT"],
                status: {
                    live: 75.89,
                    archived: 10,
                },
                actionUrl: "#takingAction__please__wait",
            },
            {
                date: new Date(),
                topic: "DBMS 4",
                activity: ["LIVE CLASS", "ASSIGNMENT", "HOME WORK"],
                status: {
                    live: 50,
                    archived: 10,
                },
                actionUrl: "#takingAction__please__wait",
            },
            {
                date: new Date(),
                topic: "DBMS 4, THE_LAST",
                activity: ["LIVE CLASS", "HOME WORK"],
                status: {
                    live: 5,
                    archived: 10,
                },
                actionUrl: "#takingAction__please__wait",
            },
        ],
    },
];

data = [...data, ...data];
data = [...data, ...data];
data = [...data, ...data];
data = [...data, ...data];

const useStyles = makeStyles((theme) => ({
    accordion: {
        "& .MuiAccordionSummary-content": {
            display: "block",
        },
        "& .MuiAccordionDetails-root": {
            background: "#f0f8fff7",
        },
    },
    expandedAccordion: {
        "& .MuiAccordionSummary-root": {
            background: "linear-gradient(45deg, lightsteelblue, transparent)",
        },
    },
}));

function WeekDetails({ schedule, dayOfClass }) {
    const tableHeads = ["DAY", "TOPIC COVERED", "ACTIVITY", "STATUS", "ACTION"];

    return (
        <TableContainer>
            <Table aria-label="Week class schedule">
                <TableHead>
                    <TableRow>
                        {tableHeads.map((cell) => {
                            return <TableCell key={cell}>{cell}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schedule.map((day, idx) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                {dayOfClass + idx}
                            </TableCell>
                            <TableCell>
                                <Typography>{day.topic}</Typography>
                            </TableCell>
                            <TableCell>
                                {day.activity.map((activity) => (
                                    <Typography variant="caption" display="block" key={activity}>
                                        {activity}
                                    </Typography>
                                ))}
                            </TableCell>
                            <TableCell>
                                <Tooltip
                                    title={`Live: ${day.status.live}%, Archived: ${day.status.archived}%`}
                                >
                                    <Typography
                                        color={
                                            parseFloat(day.status.live + day.status.archived) >= 75
                                                ? "primary"
                                                : "error"
                                        }
                                    >
                                        {parseFloat(day.status.live + day.status.archived).toFixed(
                                            2
                                        )}
                                        %
                                    </Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell>
                                <Link href={day.actionUrl}>
                                    <a style={{ textDecoration: "none" }}>VIEW CLASSROOM</a>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default function TSMClasses() {
    const classes = useStyles();
    const router = useRouter();
    const [palenl, setPalenl] = useState(0);

    useEffect(() => {
        setPalenl(router.query.palenl ? router.query.palenl : 0);
    }, []);

    let day = 1;
    return (
        <div>
            {data.map((week, idx) => {
                if (idx != 0) day += week.schedule.length;

                return (
                    <Accordion
                        expanded={palenl == idx}
                        onChange={() => {
                            setPalenl(palenl === idx ? null : idx);
                            router.push(
                                `/class/all?tab=${router.query.tab ?? "tsm"}&panel=${
                                    palenl === idx ? null : idx
                                }`,
                                false,
                                {
                                    scroll: false,
                                    shallow: true,
                                }
                            );
                        }}
                        className={`${classes.accordion} ${
                            palenl === idx ? classes.expandedAccordion : ""
                        }`}
                        key={idx}
                    >
                        <AccordionSummary
                            expandIcon={
                                palenl === idx ? (
                                    <RemoveCircleOutlineIcon />
                                ) : (
                                    <AddCircleOutlineIcon />
                                )
                            }
                            aria-controls="panel1bh-content"
                        >
                            <Typography display="block">
                                <b>Week&nbsp;:&nbsp;</b>
                                {idx + 1}
                            </Typography>
                            <Typography color="textSecondary">{week.topic}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <WeekDetails {...week} dayOfClass={day} />
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
