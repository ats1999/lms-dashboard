// all past classes
import React from 'react';
import Typography  from "@material-ui/core/Typography";
import Link from "next/link";
import ScrollButtons from "@components/util/onclick-scroll-buttons/ScrollButtons";
import NoEvent from "./NoEvent";
import style from "./styles/past.module.css";

export default function PastEvents(){
    return <div>
        <Typography
                color="textPrimary"
                variant="h4"
                component="p"
        >
            Past Events
        </Typography>

        <NoEvent/>
    </div>
}