import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner_one from "../../assets/image/banner_one.png"
import banner_two from "../../assets/image/banner_two.png"
import banner_three from "../../assets/image/banner_three.png"
const Banner = () => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Slider {...settings}>
            <div className='relative rounded-md'>
                <img className='rounded-md' src={banner_one} alt="" />
                <div className='bg-black flex  text-white bg-opacity-60 rounded-lg absolute top-0 left-0 w-full h-full'>
                    <div className='w-1/4 top-2/4 -translate-y-2/4 -translate-x-1/4 left-1/4 absolute'>
                        <h3 className='text-2xl '>Know Thyself</h3>
                        <h2 className='text-4xl'>Welcome To dhaka College</h2>
                    </div>
                </div>
            </div>
            <div className='relative rounded-md'>
                <img className='rounded-md' src={banner_two} alt="" />
                <div className='bg-black flex  text-white bg-opacity-60 rounded-lg absolute top-0 left-0 w-full h-full'>
                    <div className='w-1/4 top-2/4 -translate-y-2/4 -translate-x-1/4 left-1/4 absolute'>
                        <h3 className='text-2xl '>Know Thyself</h3>
                        <h2 className='text-4xl'>Welcome To dhaka College</h2>
                    </div>
                </div>
            </div>
            <div className='relative rounded-md'>
                <img className='rounded-md' src={banner_three} alt="" />
                <div className='bg-black flex  text-white bg-opacity-60 rounded-lg absolute top-0 left-0 w-full h-full'>
                    <div className='w-1/4 top-2/4 -translate-y-2/4 -translate-x-1/4 left-1/4 absolute'>
                        <h3 className='text-2xl '>Know Thyself</h3>
                        <h2 className='text-4xl'>Welcome To dhaka College</h2>
                    </div>
                </div>
            </div>


        </Slider>
    );
};

export default Banner;