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
            <div className='relative'>
                <img className='' src={banner_one} alt="" />
                <div className='bg-black flex  text-white bg-opacity-60  absolute top-0 left-0 w-full h-full'>
                    <div className=' p-3 w-full md:w-1/4 md:top-2/4 md:-translate-y-2/4 md:-translate-x-1/4 md:left-1/4 absolute'>
                        <h3 className=' text-base md:text-2xl '>Know Thyself</h3>
                        <h2 className=' text-base md:text-4xl'>Welcome To Our College</h2>
                        <p className='py-2'>Live out your wildest dreams at our event!
                            You won’t want to miss this one-time opportunity!
                            “It’s not too late to see what you’re made of.</p>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img className='' src={banner_two} alt="" />
                <div className='bg-black flex  text-white bg-opacity-60  absolute top-0 left-0 w-full h-full'>
                    <div className=' p-3 w-full md:w-1/4 md:top-2/4 md:-translate-y-2/4 md:-translate-x-1/4 md:left-1/4 absolute'>
                        <h3 className=' text-base md:text-2xl '>Know Thyself</h3>
                        <h2 className=' text-base md:text-4xl'>Welcome To Our College</h2>
                        <p className='py-2'>Live out your wildest dreams at our event!
                            You won’t want to miss this one-time opportunity!
                            “It’s not too late to see what you’re made of.</p>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img className='' src={banner_three} alt="" />
                <div className='bg-black flex  text-white bg-opacity-60  absolute top-0 left-0 w-full h-full'>
                    <div className=' p-3 w-full md:w-1/4 md:top-2/4 md:-translate-y-2/4 md:-translate-x-1/4 md:left-1/4 absolute'>
                        <h3 className=' text-base md:text-2xl '>Know Thyself</h3>
                        <h2 className=' text-base md:text-4xl '>Welcome To Our College</h2>
                        <p className='py-2'>Live out your wildest dreams at our event!
                            You won’t want to miss this one-time opportunity!
                            “It’s not too late to see what you’re made of.</p>
                    </div>
                </div>
            </div>


        </Slider>
    );
};

export default Banner;