import {
    Typography
} from "@material-ui/core";

import ClassTabs from "@components/class/ClassTabs";

const data = {
    lastClass:"Data Structure"
}

export default function ClassRoom(){
    return <div>
        <Typography variant="h4" component="h1" color="textSecondary">
            Your last class
        </Typography>
        
        <Typography variant="h6" component="h" color="textPrimary">
            {data.lastClass}
        </Typography>
        <ClassTabs/>
    </div>
}