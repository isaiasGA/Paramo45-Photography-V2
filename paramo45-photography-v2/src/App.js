import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';

import Header from './components/Header';
import Home from './Home';
import Newsletter from './components/Newsletter';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';
import World from './components/photoCategories/World';
import Nature from './components/photoCategories/Nature';
import SocialMedia from './components/SocialMedia';

const App = () => {
  
  return (
  <div className='App'>
    <SimpleReactLightbox>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/newsletter' component={Newsletter}/>
            <Route path='/world-around-me' component={World} />
            <Route path='/nature' component={Nature} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/about' component={AboutMe} />
            <Route path='/' component={Home} />
          </Switch>
          <SocialMedia />
        </div>
      </BrowserRouter>
    </SimpleReactLightbox>
  </div>
  );
}

export default App;
