import React from 'react';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
// import Beranda from './Component/Class/Beranda';
// import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutComp} />
        <Route exact path="/detail/:id" component={DetailComp} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;