import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import nature1 from '../../images/_DSC0130.jpg';
import nature2 from '../../images/_DSC0141.jpg';
import nature3 from '../../images/DSC_0004.jpg';
import nature4 from '../../images/DSC_0051.jpg';
import nature5 from '../../images/DSC_0064.jpg';
import nature6 from '../../images/DSC_0099.jpg';
import nature7 from '../../images/DSC_0105.jpg';
import nature8 from '../../images/DSC_0106.jpg';
import nature9 from '../../images/DSC_0125.jpg';
import nature10 from '../../images/DSC_0131.jpg';
import nature11 from '../../images/DSC_0294.jpg';
import nature12 from '../../images/DSC_0322.jpg';
import nature13 from '../../images/DSC_0366.jpg';
import nature14 from '../../images/DSC_035790.jpg';
import nature15 from '../../images/nature.jpg';


const Nature = () => {
  return(
    <SRLWrapper>
      <div className='natureImages'>
        <div className='natureImg nature1'>
          <img className='image imgNatureEffect' src={nature1} alt=''/>
        </div>
        <div className='natureImg nature2'>
          <img className='image imgNatureEffect' src={nature2} alt=''/>
        </div>
        <div className='natureImg nature3'>
          <img className='image imgNatureEffect' src={nature3} alt=''/>
        </div>
        <div className='natureImg nature4'>
          <img className='image imgNatureEffect' src={nature4} alt=''/>
        </div>
        <div className='natureImg nature5'>
          <img className='image imgNatureEffect' src={nature5} alt=''/>
        </div>
        <div className='natureImg nature6'>
          <img className='image imgNatureEffect' src={nature6} alt=''/>
        </div>
        <div className='natureImg nature7'>
          <img className='image imgNatureEffect' src={nature7} alt=''/>
        </div>
        <div className='natureImg nature8'>
          <img className='image imgNatureEffect' src={nature8} alt=''/>
        </div>
        <div className='natureImg nature9'>
          <img className='image imgNatureEffect' src={nature9} alt=''/>
        </div>
        <div className='natureImg nature10'>
          <img className='image imgNatureEffect' src={nature10} alt=''/>
        </div>
        <div className='natureImg nature11'>
          <img className='image imgNatureEffect' src={nature11} alt=''/>
        </div>
        <div className='natureImg nature12'>
          <img className='image imgNatureEffect' src={nature12} alt=''/>
        </div>
        <div className='natureImg nature13'>
          <img className='image imgNatureEffect' src={nature13} alt=''/>
        </div>
        <div className='natureImg nature14'>
          <img className='image imgNatureEffect' src={nature14} alt=''/>
        </div>
        <div className='natureImg nature15'>
          <img className='image imgNatureEffect' src={nature15} alt=''/>
        </div>
      </div>
    </SRLWrapper>
  );
}

export default Nature;