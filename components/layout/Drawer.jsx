import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HeaderControls from "./HeaderControls";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import HelpIcon from "@material-ui/icons/Help";
import AssistantIcon from "@material-ui/icons/Assistant";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import Link from "next/link";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 20,
        padding: "0px",
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paperAnchorDockedLeft": {
            borderRight: "0px solid rgba(0, 0, 0, 0.12)",
        },
        [theme.breakpoints.up("sm")]: {
            "& .MuiDrawer-paperAnchorDockedLeft": {
                borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            },
        },
        "& .jss12": {
            padding: "0px",
        },
    },
    drawerOpen: {
        width: drawerWidth,
        marginTop: "50px",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        "& .MuiDrawer-paperAnchorDockedLeft": {
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        },
    },
    drawerClose: {
        marginTop: "50px",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: 0,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(7) + 1,
        },
    },
    chevronIconContainer: {
        position: "fixed",
        top: 0,
        left: `${drawerWidth - 70}px`,
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "white",
        borderLeft: "8px solid #3f51b5",
        borderBottomLeftRadius: "50%",
    },
    menuList: {
        marginTop: "37px",
        [theme.breakpoints.up("sm")]: {
            marginTop: "54px",
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        width: "100%",
    },
    layersIcon: {
        color: "white",
    },
    bdevgIconButton: {
        padding: "0px",
    },
    whiteColor: {
        color: "white",
    },
    userAvatar: {
        position: "absolute",
        right: 0,
    },
    appbarInfo: {
        display: "flex",
    },
    mainText: {
        cursor: "pointer",
    },
}));

export default function DrawerComponent({ children }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href="/">
                        <Typography variant="h6" className={classes.mainText}>
                            LMS
                        </Typography>
                    </Link>

                    <div className={classes.appbarInfo}>
                        <HeaderControls />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={`${classes.toolbar} ${classes.chevronIconContainer}`}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {[
                        {
                            text: "Class Room",
                            url: "/class/room?tab=LIVE_LECTURE",
                            icon: <LocalLibraryIcon />,
                        },
                        {
                            text: "All Classes",
                            url: "/class/all",
                            icon: <LaptopChromebookIcon />,
                        },
                        {
                            text: "Help Request",
                            url: "/coming-soon?page=Help Request",
                            icon: <HelpIcon />,
                        },
                        {
                            text: "Teaching Assistent",
                            url: "/coming-soon/?page=Teaching Assistent",
                            icon: <AssistantIcon />,
                        },
                        {
                            text: "Leader Board",
                            url: "/coming-soon?page=Leader Board",
                            icon: <EmojiFlagsIcon />,
                        },
                    ].map((link) => (
                        <Link href={link.url} key={link.text}>
                            <ListItem button>
                                <ListItemIcon>{link.icon}</ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}
