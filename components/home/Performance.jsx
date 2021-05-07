import { Grid, Typography } from "@material-ui/core";
import { Line } from "rc-progress";
import style from "./styles/performance.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({}));

function LineProgress({ percent }) {
    return (
        <Line
            percent={percent}
            strokeWidth="4"
            strokeColor="#4bca5e"
            trailColor="#a7bed4"
            trailWidth="4"
        />
    );
}

export default function Performance({ Attendance, psPercent }) {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography color="textPrimary" component="h5" variant="h6" align="center">
                    Performance
                </Typography>
            </Grid>

            {/* progress */}
            <Grid item xs={12}>
                <div>
                    <p>
                        Attendance <span>{Attendance}%</span>
                    </p>
                    <LineProgress percent={Attendance} />
                </div>
                <div>
                    <p>
                        Problem Solved <span>{psPercent}%</span>
                    </p>
                    <LineProgress percent={psPercent} />
                </div>
            </Grid>

            <Grid item xs={12}>
                <Link href="#profile">
                    <a className={style.profileLinkText}>View Full Profile</a>
                </Link>
            </Grid>
        </Grid>
    );
}
