import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
    <div>
      <div className='ui brown three item inverted menu ui large menu'>
        <Link to ='/' className='item'>
          Home
        </Link>
        <Link to ='/gallery' className='item'>
          Gallery
        </Link>
        <Link to ='/newsletter' className='item'>
          Newsletter
        </Link>
      </div>
    </div>)
};


export default Header;