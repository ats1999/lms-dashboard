import { Fab,Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    fabButton:{
        margin:"5px"
    }
}))
function FabButton({icon}){
    const classes = useStyles();
    return <Fab
        size="small" 
        color="primary"
        className={classes.fabButton}
    >
        {icon}
    </Fab>
}
function HeaderControls(){
    return <>
    <FabButton icon={<SearchIcon/>}/>
    <FabButton icon={<WhatshotIcon/>}/>
    <FabButton icon={<AccountTreeIcon/>}/>
    <FabButton icon={<Avatar src="" alt="Rahul kumar" />}/>
    </>
}

export default HeaderControls;