import React from 'react';
import './BannerItem.css'
const BannerItem = ({slide}) => {
    const {id,image,next,prev} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-96">
        <div className='carousel-img w-full'>
        <img  src={image} className="w-full h-full"  />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${prev}`} className="btn btn-circle me-5">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
        
        <div className="absolute flex transform -translate-y-1/2 left-20 top-1/2 w-1/2">
            <h3 className='text-3xl text-white'> Resale Wonderfull Desktop <br /> buy or sale</h3>
        </div>
        <div className="absolute transform -translate-y-1/2 left-20 top-72 w-full">
            <p className='text-xl text-white'>Choose Your favorite Computer from here,<br /> and sale or buy. Use perfectly our product. <br /> and return to get problem!</p>
        </div>
      </div>
    );
};

export default BannerItem;