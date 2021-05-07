import style from "./styles/noevent.module.css";
import Typography from "@material-ui/core/Typography";

export default function NoEvent() {
    return (
        <div className={style.noEvent}>
            <img
                src="https://res.cloudinary.com/dun9j2psp/image/upload/v1619836864/lsm/home/undraw_happy_announcement_ac67_wwaurf.svg"
                alt="No Event"
            />

            <Typography color="textSecondary">No Events!</Typography>
        </div>
    );
}
