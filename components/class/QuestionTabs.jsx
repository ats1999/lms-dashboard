import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core";

// const
import TableHeaders from "@data/class/QuestionTabsTableHeader.json";
import QUESTION from "@const/class/question.json";

// custom
import Question from "./Question";

// style
import style from "./styles/question.module.css";

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: "lightblue",
  },
  tabpane: {
    padding: "0px",
  },
  table: {
    width: "100%",
    "& .MuiTableCell-root": {
      padding: "0px",
    },
  },
}));

function getStaus(status) {
  // 0 - difficulty
  // 1 type
  // 2 status
  const difficulty = QUESTION.DIFFICULTY[status[0]];
  const type = QUESTION.TYPE[status[1]];
  const statusText = QUESTION.STATUS[status[2]];
  // const classStr = [style.difficulty,style[`difficulty_${status[0]}`].join(",")
  const classStr = "";
  return [
    <p className={classStr}>{difficulty}</p>,
    <p className={`${style.type} ${style[`type_${status[1]}`]}}`}>{type}</p>,
    <p className={`${style.status} ${style[`status_${status[2]}`]}}`}>
      {statusText}
    </p>,
  ];
}

function AllQuestions({ questions }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            {TableHeaders.map((header) => {
              return <TableCell key={header}>{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question, idx) => {
            const cells = [
              idx + 1,
              question.name,
              ...getStaus(question.status),
            ];
            return (
              <TableRow key={question._id}>
                {cells.map((item, idx) => {
                  return <TableCell key={idx}>{item}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function QuestionTabs({ questions }) {
  const router = useRouter();
  const classes = useStyles();
  const [tab, setTab] = useState("default");

  useEffect(() => {
    if (router.query.qt) {
      // qt - question tab
      setTab(router.query.qt);
    }
  }, []);

  if (!questions || questions.length === 0)
    return <p>No Questions assigned!</p>;

  return (
    <TabContext value={tab}>
      <TabList
        onChange={(_, val) => {
          const { tab, panel } = router.query;
          setTab(val);
          router.push(
            `/class/room?tab=${tab}&panel=${panel}&qt=${val}`,
            false,
            {
              scroll: false,
              shallow: true,
            }
          );
        }}
        aria-label="questions assignment tabs"
        scrollButtons="on"
        variant="scrollable"
        className={classes.tabs}
      >
        <Tab label="ALL QUESTIONS >" value={"default"} />
        {questions.map((q, idx) => {
          return <Tab key={q._id} value={q._id} label={`Q${idx + 1}`} />;
        })}
      </TabList>
      <TabPanel value="default" className={classes.tabpane}>
        <AllQuestions questions={questions} />
      </TabPanel>
      {questions.map((q) => {
        return (
          <TabPanel key={q._id} value={q._id} className={classes.tabpane}>
            <Question md={q.md} />
          </TabPanel>
        );
      })}
    </TabContext>
  );
}
