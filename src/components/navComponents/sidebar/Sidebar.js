import React, { useState } from 'react';
import './sidebar.scss';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#293042',
            dark: '#293042',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.primary.main,
    },
}));

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const classes = useStyles();
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <div className="sidebar_title">
                        <div className="sidebar_img">
                            {/*     <img src={logo} alt="logo" />*/}
                            <h1>Wana</h1>
                        </div>
                        <i
                            className="fa fa-times"
                            id="sidebarIcon"
                            onClick={() => closeSidebar()}
                        ></i>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link active_menu_link">
                            {/*<i className="fa fa-home"></i>*/}
                            <DashboardIcon color="action"/>
                            <a href="#">Dashboard</a>
                        </div>
                        <h2>MNG</h2>
                        <div className="sidebar_link">
                            <i className="fa fa-user-secret"></i>
                            <a href="#">Admin Management</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-building-o"></i>
                            <a href="#">Company Management</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-wrench"></i>
                            <a href="#">Employment Management</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-archive"></i>
                            <a href="#">Warehouse</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-handshake-o"></i>
                            <a href="#">Contracts</a>
                        </div>
                        <h2>LEAVE</h2>
                        <div className="sidebar_link">
                            <i className="fa fa-question"></i>
                            <a href="#">Requests</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-sign-out"></i>
                            <a href="#">Leave Policy</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-calendar-check-o"></i>
                            <a href="#">Special Day</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-files-o"></i>
                            <a href="#">Apply for leave</a>
                        </div>
                        <h2>PAYROLL</h2>
                        <div className="sidebar_link">
                            <i className="fa fa-money"></i>
                            <a href="#">Payroll</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-briefcase"></i>
                            <a href="#">Paygrade</a>
                        </div>
                        <div className="sidebar_logout">
                            <i className="fa fa-power-off"></i>
                            <a href="#">Logout</a>
                        </div>
                    </div>                </Paper>
            </Grid>

        </div>
    )
}

export default Sidebar;