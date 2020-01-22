import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//routers
import {BrowserRouter} from 'react-router-dom'

//components
import Header from './components/Header/Navigation/index';
import SideDrawer from './components/Header/Navigation/SideDrawer/SideDrawer'
import Backdrop from './components/Header/Navigation/Backdrop/Backdrop'
import AcessBar from './components/Header/AcessBar/AcessBar';

//Pages
import Home from './Pages/Home'

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
        <AcessBar />
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Home />
      </div>
    )
  }
}

export default App;
