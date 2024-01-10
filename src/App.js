import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/body/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';
import MenBody from './components/Men.js/MenBody';
import WomenBody from './components/women/WomenBody';
import KidsBody from './components/kids/KidsBody';
import HomeAndLiving from './components/homeAndLiving/HomeAndLiving';
import LogIn from './components/login/LogIn';
import WishList from './components/wishlist/WishList';
import FilterMen from './components/filter/FilterMen';


function App() {

  return (
    <Router>
      <div className="App">

        <Navigation />
        <Route exact path={'/'} component={Home} />
        <Route path={'/men'} component={MenBody} />
        <Route path={'/women'} component={WomenBody} />
        <Route path={'/kids'} component={KidsBody} />
        <Route path={'/homeandliving'} component={HomeAndLiving} />
        <Route path={'/login'} component={LogIn} />
        <Route path={'/wishlist'} component={WishList} />
        <Route path={'/filtermen'} component={FilterMen} />

        <Footer />
        <hr />
      </div>
    </Router>
  );
}

export default App;
