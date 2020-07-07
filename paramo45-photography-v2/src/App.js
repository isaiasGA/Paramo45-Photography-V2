import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './Home';
import AboutMe from './components/AboutMe';
import PhotoCategories from './components/PhotoCategories';
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';

const App = () => {
  
  return (
  <div className='App'>
    <BrowserRouter>
      <div>
      <Header />
      <Switch>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/photo-categories'> 
          <PhotoCategories />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <SocialMedia />
      </div>
    </BrowserRouter>
   
  </div>)
}

export default App;
