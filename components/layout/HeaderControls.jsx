import { Fab,Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    fabButton:{
        margin:"5px",
        flexBasic:"50px"
    }
}))
function FabButton({icon}){
    const classes = useStyles();
    return <Fab
        size="small" 
        color="primary"
        className={classes.fabButton}
        href="https://github.com/ats1999/lms-dashboard"
    >
        {icon}
    </Fab>
}
function HeaderControls(){
    return <>
    <FabButton icon={<SearchIcon/>}/>
    <FabButton icon={<WhatshotIcon/>}/>
    <FabButton icon={<AccountTreeIcon/>}/>
    <FabButton icon={<Avatar src="https://res.cloudinary.com/bdevg/image/upload/v1604287418/pic_xexz8o.jpg" alt="Rahul kumar"/>}/>
    </>
}

export default HeaderControls;