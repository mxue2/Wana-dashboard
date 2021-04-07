import React, { useState } from 'react';

const Header = ({ sidebarOpen, openSidebar }) => {
    return (
        <div className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar_left">
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar_right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                   {/* <img width="30" src={avatar} alt="avatar" />*/}
                </a>
            </div>
        </div>

    )

}

export default Header;