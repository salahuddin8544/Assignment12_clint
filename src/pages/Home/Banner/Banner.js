import React from 'react';
import img1 from '../../../assest/carousel/img1.jpg'
import img2 from '../../../assest/carousel/img2.jpg'
import img3 from '../../../assest/carousel/img3.jpg'
import BannerItem from './BannerItem/BannerItem';
const Banner = () => {
    const bannerData = [
        {
            id:1,
            image: img1,
            prev:3,
            next:2
        },
        {
            id:2,
            image: img2,
            prev:1,
            next:3
        },
        {
            id:3,
            image: img3,
            prev:2,
            next:1
        },
    ]
    return (
        <div>
            <div className="carousel w-full">
                {
                    bannerData.map(slide=> <BannerItem
                    
                    key={slide.id}
                    slide = {slide}
                    ></BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;