import React from 'react';
import lightImg from '../../assets/img/cityscape-with-blue-sky-clouds-bangkok.jpg';
import darkImg from '../../assets/img/downtown-business-district-bangkok-thailand.jpg';

const BemMethodology = () => {
  return (
    <>
        <div className='card-container'>
          <div className='card card--light'>
            <img className='card--image' src={lightImg} alt="" />
            <h3 className='card--title'>I am a light card</h3>
            <p className='card--body'>I am a description of the light card image</p>
          </div>
          <div className='card card--dark'>
            <img className='card--image' src={darkImg} alt="" />
            <h3 className='card--title'>I am a dark card</h3>
            <p className='card--body'>I am a description of the dark card image</p>
          </div>
        </div>
    </>
  )
}

export default BemMethodology
