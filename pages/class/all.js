import {
    Typography
} from "@material-ui/core";
import AllClassesTabs from "@components/class/all/AllClassesTab";

export default function AllClasses(){
    return <div>
        <Typography color="textSecondary">
            All your classes shedule for batch <b>XYZ</b>
        </Typography>

        <AllClassesTabs/>
    </div>
}