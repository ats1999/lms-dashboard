import EventType from "@const/home/upcomeingEvents.json";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import NaturePeopleOutlinedIcon from "@material-ui/icons/NaturePeopleOutlined";
import style from "./styles/upcomeingEvents.module.css";
import commonStyle from "./styles/style.module.css";
import Typography from "@material-ui/core/Typography";
import ScrollButtons from "@components/util/onclick-scroll-buttons/ScrollButtons";

const data = [
    {
        type: EventType.LIVE_CLASS,
        eventName: "Lab Session",
        date: "24 Apr, Saturday",
        time: "08:00 PM",
    },
    {
        type: EventType.MENTOR_SESSION,
        eventName: "Mentor Session",
        date: "28 Apr, Saturday",
        time: "08:00 PM",
    },
    {
        type: EventType.LIVE_CLASS,
        eventName: "Lab Session",
        date: "24 Apr, Saturday",
        time: "08:00 PM",
    },
];

function Event({ type, eventName, date, time }) {
    let typeName, icon;
    switch (type) {
        case EventType.LIVE_CLASS:
            typeName = "Live Class";
            icon = <SupervisedUserCircleOutlinedIcon color="error" />;
            break;
        case EventType.MENTOR_SESSION:
            typeName = "Mentor Session";
            icon = <NaturePeopleOutlinedIcon color="error" />;
            break;
    }
    return (
        <div className={`flexItemsScrollableHorizontal ${style.eventContainer}`}>
            <p className={style.eventType}>
                {icon} {typeName}
            </p>
            <p className={style.eventName}>{eventName}</p>
            <p className={style.dateTimeText}>
                {date} | {time}
            </p>
        </div>
    );
}

export default function UpcomeingEvent() {
    return (
        <div className={style.upcomeingEventsContainer}>
            <ScrollButtons containerId="container" />
            <Typography color="textPrimary" variant="h4" component="p">
                Upcomeing Events
            </Typography>
            <div id="container" className={`flexContainer`}>
                {[...data, ...data, ...data].map((event, idx) => {
                    return <Event {...event} key={idx} />;
                })}
            </div>
        </div>
    );
}
