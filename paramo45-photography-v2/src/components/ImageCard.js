import React, { useState } from 'react';
import Lightbox from 'fslightbox-react';

const ImageGallery = ({ images, modalImage }) => {
  console.log(images)

 const [controller, setController]  = useState({
   toggleVisible: false,
   slide: 1
 })

  const showSlide = (number) => {
    setController({
      toggleVisible: !controller.toggleVisible,
      slide: number
    })
  }

 const {urls, alt_description} = images; 
  return(
    <>
    <Lightbox
      toggler={controller.toggleVisible}
      slide={controller.imageSlide}
      sources={[`${modalImage}`]}
    />
      <div className='ui large images'>
       <img className='ui image' onClick={() => showSlide(1)} src={urls.regular} alt={alt_description}/>
      </div>
    </> 
    );

   
}


export default ImageGallery;


// <>
// <button onClick={() => setToggler(!toggler)}>
// Toggle Lightbox
// </button>
// <FsLightbox
// toggler={toggler}
// sources={[
// 'images/random-image.jpg',
// 'https://i.imgur.com/fsyrScY.jpg',
// 'https://www.youtube.com/watch?v=xshEZzpS4CQ',
// 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
// ]}
// />
// </>