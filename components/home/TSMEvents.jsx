// all past classes
import React from 'react';
import Typography  from "@material-ui/core/Typography";
import Link from "next/link";
import ScrollButtons from "@components/util/onclick-scroll-buttons/ScrollButtons";
import NoEvent from "./NoEvent";

export default function PastEvents(){
    return <div>
        <Typography
                color="textPrimary"
                variant="h4"
                component="p"
        >
            TSM Events
        </Typography>

        <NoEvent/>
    </div>
}