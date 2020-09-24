import React from 'react';
import { Link } from 'react-router-dom';
import natureImg from './images/nature.jpg';
import worldImg from './images/world.jpg';

const Home = () => {
  return (
    <div className='home'>
      <section className='top-section'>
        <div data-aos="fade-down" data-aos-duration='2000' data-aos-easing='ease-in-quart' className='title'>
          <h1 className='paramo-title'>Paramo45</h1>
          <h2 className='photo-title'>Photography</h2>
        </div>
      </section>
        <div className=' about'>
          <p data-aos='fade-right' data-aos-duration='2000' data-aos-easing='ease-in-quad'>“Souls cross ages like clouds cross skies, an' tho' a cloud's shape nor hue nor size don't stay the same, it's still a cloud an' so is a soul.” - David Mitchell, Cloud Atlas</p>
          <div data-aos='fade-left' data-aos-duration='2000'>
            <Link className='about-bttn' to='/about'>About Me</Link>
          </div>
        </div>
      <section data-aos="fade-up" data-aos-duration='2000' data-aos-easing='ease-in-quart' className='ui three stackable cards catContainer' style={{marginLeft:'15%', marginBottom:'7%'}}>
        <Link className=' card' to ='/nature'>
          <div className='content'>
              <h2 className='header'>Nature</h2>
          </div>
          <div className='imageNature'>
            <img className='image' src={natureImg} alt='river'/>
          </div>
        </Link>
        <Link className='card' to='/world-around-me'>
          <div className='content'>
            <h2 className='header'>World Around Me</h2>
          </div>
          <div className='imageWorld'>
              <img className='image' src={worldImg} alt='Freeway'/>
          </div> 
        </Link>
      </section>
    </div>
    );
}

export default Home;



