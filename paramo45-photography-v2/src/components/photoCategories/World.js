import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import world1 from '../../images/_DSC010.jpg';
import world2 from '../../images/_DSC0037.jpg';
import world3 from '../../images/_DSC0045.jpg';
import world4 from '../../images/_DSC0051.jpg';
import world5 from '../../images/_DSC0058.jpg';
import world6 from '../../images/_DSC0060.jpg';
import world7 from '../../images/DSC_0020.jpg';
import world8 from '../../images/DSC_0022.jpg';
import world9 from '../../images/DSC_0044.jpg';
import world10 from '../../images/DSC_0070.jpg';
import world11 from '../../images/DSC_0081.jpg';
import world12 from '../../images/DSC_0124.jpg';
import world13 from '../../images/DSC_0279.jpg';
import world14 from '../../images/DSC_0429.jpg';
import world15 from '../../images/DSC_000467.jpg';
import world16 from '../../images/DSC_0478.jpg';
import world17 from '../../images/DSC_0506.jpg';
import world18 from '../../images/world.jpg';

const World = () => {
  window.scrollTo(0, 0);

  return (
    <SRLWrapper>
      <div className='worldImages'>
        <div className='worldImg world1'>
          <img className='image worldImgEffect' src={world1} alt=''/>
        </div>
        <div className='worldImg world2'>
          <img className='image worldImgEffect' src={world2} alt=''/>
        </div>
        <div className='worldImg world3'>
          <img className='image worldImgEffect' src={world3} alt=''/>
        </div>
        <div className='worldImg world4'>
          <img className='image worldImgEffect' src={world4} alt=''/>
        </div>
        <div className='worldImg world5'>
          <img className='image worldImgEffect' src={world5} alt=''/>
        </div>
        <div className='worldImg world6'>
          <img className='image worldImgEffect' src={world6} alt=''/>
        </div>
        <div className='worldImg world7'>
          <img className='image worldImgEffect' src={world7} alt=''/>
        </div>
        <div className='worldImg world8'>
          <img className='image worldImgEffect' src={world8} alt=''/>
        </div>
        <div className='worldImg world9'>
          <img className='image worldImgEffect' src={world9} alt=''/>
        </div>
        <div className='worldImg world10'>
          <img className='image worldImgEffect' src={world10} alt=''/>
        </div>
        <div className='worldImg world11'>
          <img className='image worldImgEffect' src={world11} alt=''/>
        </div>
        <div className='worldImg world12'>
          <img className='image worldImgEffect' src={world12} alt=''/>
        </div>
        <div className='worldImg world13'>
          <img className='image worldImgEffect' src={world13} alt=''/>
        </div>
        <div className='worldImg world14'>
          <img className='image worldImgEffect' src={world14} alt=''/>
        </div>
        <div className='worldImg world15'>
          <img className='image worldImgEffect' src={world15} alt=''/>
        </div>
        <div className='worldImg world16'>
          <img className='image worldImgEffect' src={world16} alt=''/>
        </div>
        <div className='worldImg world17'>
          <img className='image worldImgEffect' src={world17} alt=''/>
        </div>
        <div className='worldImg world18'>
          <img className='image worldImgEffect' src={world18} alt=''/>
        </div>
      </div>
    </SRLWrapper>
  );
}

export default World