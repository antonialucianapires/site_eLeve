import React from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Logo from '/home/myworkspace/site_eLeve/frontend/src/images/logo.png'
import "./style.css";

const Header = props => (
    <header id="main-header">
        <nav id="navigation">
            <div className="button-navbar">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div><a id="logo" href="#"><img src={Logo}/>Leve</a></div>
            <div className="spacer"></div>
            <div id="nav-items">
                <ul>
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">PARCEIROS</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;