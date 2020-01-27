import React from 'react';
import Logo from '/home/myworkspace/site_eLeve/frontend/src/images/logo.png'
import {Link} from 'react-router-dom';

//pages
import Contato from '../../../../Pages/Contato/Contato'

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <div>
        <a id="logo" href="#"><img src={Logo}/>Leve</a>
      </div>
      <ul>
        <li><a href="#">SOBRE</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">PARCEIROS</a></li>
        <Link to={Contato}>Contato</Link>
      </ul>
    </nav>
  )
}

export default sideDrawer;