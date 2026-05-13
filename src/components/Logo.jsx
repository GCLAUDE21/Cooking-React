import React from 'react';
import logo from '../../assets/img/chef-cooking-food-in-a-pot-png.webp';

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} />
            <h1>Cooking App</h1>
        </div>
    );
};

export default Logo;