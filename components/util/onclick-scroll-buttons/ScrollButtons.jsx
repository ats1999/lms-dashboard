import {useState,useEffect} from "react";
import {
    Fab    
} from "@material-ui/core";
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import scroll from "@util/scroll-flex-onclick/scroll";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    buttons:{
        position:'absolute',
        top:"100px",
        zIndex:1
    },
    left:{
        left:"10px"
    },
    right:{
        right:"10px"
    },
    '& .MuiFab-sizeSmall':{
        width:"25px"
    }
}))

function Buttons({containerId}){
    const classes = useStyles();
    const [containerEl, setContainerEl] = useState(null);
    useEffect(() => {
        setContainerEl(document.getElementById(containerId));
    }, []);
    return <>
        <Fab
            className={`${classes.buttons} ${classes.left}`}
            color="primary"
            size="small"
            onClick={()=>scroll.scrollLeft(containerEl)}
        >
            <ChevronLeftOutlinedIcon/>
        </Fab>
        <Fab
            className={`${classes.buttons} ${classes.right}`} 
            color="primary"
            size="small"
            onClick={()=>scroll.scrollRight(containerEl)}
        >
            <ChevronRightOutlinedIcon/>
        </Fab>
    </>
}



export default Buttons