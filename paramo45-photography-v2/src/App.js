import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';

import Header from './components/Header';
import Home from './Home';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';

const App = () => {
  
  return (
  <div className='App'>
    <SimpleReactLightbox>
      <BrowserRouter>
        <div>
        <Header />
        <Switch>
          <Route path='/about'>
            <AboutMe />
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
    </SimpleReactLightbox>
  </div>)
}

export default App;
