import React  from 'react';
import {SRLWrapper} from 'simple-react-lightbox'
            //beach
import image1 from '../images/DSC0035.jpg';
import image2 from '../images/_DSC0037.jpg'
import image3 from '../images/_DSC0059.jpg'
import image4 from '../images/_DSC010.jpg'
import image5 from '../images/DSC_0051.jpg'
import image6 from '../images/_DSC0130.jpg'
import image7 from '../images/DSC_0125.jpg'
import image8 from '../images/DSC_0022.jpg'
import image9 from '../images/DSC_0044.jpg'
// import image10 from '../images/_DSC.jpg'
// import image11 from '../images/_DSC.jpg'
// import image12 from '../images/_DSC.jpg'
// import image13 from '../images/_DSC.jpg'
// import image14 from '../images/_DSC.jpg'
// import image15 from '../images/_DSC.jpg'
// import image from '../images/_DSC.jpg'

const ImageGallery = () => {

  return(
    <>
      <SRLWrapper>
        <div className='imagesContainer'>
          <div className='galleryImg img1'>
            <img className='image' src={image1} alt={'silhouette at the beach'}/>
          </div>
          <div className='galleryImg img2'>
            <img className='image' src={image2} alt={'architecture'}/>
          </div>
          <div className='galleryImg img3'>
            <img className='image' src={image3} alt={'three lights on freeway'}/>
          </div>
          <div className='galleryImg img4'>
            <img className='image' src={image4} alt={'two people walking'}/>
          </div>
          <div className='galleryImg img5'>
            <img className='image' src={image5} alt={'seagull'}/>
          </div>
          <div className='galleryImg img6'>
            <img className='image' src={image6} alt={'mountain'}/>
          </div>
          <div className='galleryImg img7'>
            <img className='image' src={image7} alt={'tree branches'}/>
          </div>
          <div className='galleryImg img8'>
            <img className='image' src={image8} alt={'street artist'}/>
          </div>
          <div className='galleryImg img9'>
            <img className='image' src={image9} alt={'restaurant at the pier'}/>
          </div>
        </div>
      </SRLWrapper>
    </> 
    );  
}


export default ImageGallery;
