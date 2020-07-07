import React from 'react';
import { Link } from 'react-router-dom';
import natureImg from './images/nature.jpg';
import portraitImg from './images/portrait.jpg';
import worldImg from './images/world.jpg';

const Home = () => {
  return (
    <div className='home'>
      <section className='top-section'>
        <div className='title'>
          <h1 className='paramo-title'>Paramo45</h1>
          <h2 className='photo-title'>Photography</h2>
        </div>
      </section>

        <div className=' about'>
          <p>“Souls cross ages like clouds cross skies, an' tho' a cloud's shape nor hue nor size don't stay the same, it's still a cloud an' so is a soul.” - David Mitchell, Cloud Atlas</p>
          <Link className='about-bttn' to='/about'>About Me</Link>
        </div>
      
           
      <section className='ui three stackable cards' style={{ margin: '3%'}}>
          <Link className=' card' to ='/nature'>
            <div className='content'>
               <h2 className='header'>Nature</h2>
            </div>
            <div className='image'>
              <img className='ui large image' src={natureImg} alt='river'/>
            </div>
          </Link>
            
          <Link className='ui component card' to='/portrait'>
            <div className ='content'>
              <h2 className='header'>Portrait</h2>
            </div>
            <div className='image'>      
              <img className='portrait-img' src={portraitImg} alt='baby'/>
            </div>        
          </Link>
        
          <Link className='card' to='/world-around-me'>
            <div className='content'>
              <h2 className='header'>World Around Me</h2>
            </div>
            <div className='image'>
               <img  className='ui large image' src={worldImg} alt='Freeway'/>
            </div> 
          </Link>
      </section>
    </div>
    );
}

  //VIEWPORTS FOR PORTRAIT CARD

// style={{ height: '373px'}} for small screen
//style={{ height: '482px'}} for larger screen

export default Home;



