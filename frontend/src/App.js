import React, {Component} from 'react';
import './App.css';

//components
import Header from './components/Header/Navigation/index';
import SideDrawer from './components/Header/Navigation/SideDrawer/SideDrawer'
import Backdrop from './components/Header/Navigation/Backdrop/Backdrop'

//Route/Pages
import Routes from '/home/myworkspace/site_eLeve/frontend/src/routes.js'


class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      
    }
    return (
      <div style={{ height: '100%' }}>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Routes />
      </div>
    )
  }
}

export default App;
