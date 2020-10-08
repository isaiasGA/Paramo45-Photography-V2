import React from 'react';
// import selfie from '../images/selfie.jpg';

const AboutMe = () => {
    return (
     <div className='aboutMe'>
     	<h1>About Me </h1>
			 <div className='description'>
				 {/* <img className='image' src={selfie} alt='' /> */}
				 <h2>Isaias Garcia</h2>
				 <p>Photography has been an important hobby in my life. I decided to create this website in order to showcase my favorite collection of photographies that I have taken in the past few years. I hope you enjoy browsing through my collection as much as I have enjoyed taking each photo.</p>
			 </div>
     </div>
    );
}


export default AboutMe;