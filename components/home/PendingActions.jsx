import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import ACTIONS from "@const/home/actions.json";
import style from "./styles/pending.action.module.css";

const data = [
    {
        type: ACTIONS.FEED_BACK,
        title: "rate your recent help request",
        subTitle: "Problem: ABC not a problem",
        description: "How can i use DP here?",
        url: "#Problem: ABC not a problem",
    },
    {
        type: ACTIONS.VIEW_ANSWER,
        title: "View the answer of your question",
        subTitle: "Problem: ABC not a problem",
        description: "Syntax error",
        url: "#Problem: ABC not a problem",
    },
    {
        type: ACTIONS.FEED_BACK,
        title: "rate your recent help request",
        subTitle: "Problem: ABC not a problem",
        description: "How can i use DP here?",
        url: "#Problem: ABC not a problem",
    },
];

function getUrlText(type) {
    switch (type) {
        case ACTIONS.FEED_BACK:
            return "Provide feedback";
        case ACTIONS.VIEW_ANSWER:
            return "View Your answer";
    }
}

function Action({ title, subTitle, url, type, description }) {
    return (
        <div className={`flexItemsScrollableHorizontal ${style.item}`}>
            <p className={style.title}>{title}</p>
            <p className={style.subTitle}>{subTitle}</p>
            <p className={style.description}>{description}</p>
            <Link href={url}>
                <a className={style.url}>{getUrlText(type)}</a>
            </Link>
        </div>
    );
}

function PendingActions() {
    return (
        <div className={style.pendingActionContainer}>
            <Typography color="textPrimary" variant="h4" component="p">
                Pending Actions on you
            </Typography>
            <div id="action__container" className={`flexContainer`}>
                {data.map((action, idx) => {
                    return <Action {...action} key={idx} />;
                })}
            </div>
        </div>
    );
}

export default PendingActions;
