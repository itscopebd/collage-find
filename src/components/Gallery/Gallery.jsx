import React from 'react';
import "./Gallery.css"
const Gallery = () => {
    return (

        <div className='container mx-auto my-16'>
            <h4 className="text-3xl font-bold text-center mb-10"> Graduate's Gallery</h4>
            <div class="grid__wrapper">

                <div class="span__two">
                    <img src="https://i.ibb.co/QFYbqbY/KINGS-UNIVERSITY.png" alt="" />
                </div>
                <div class="span__one" >
                    <img src="https://i.ibb.co/d5d1vwQ/grad2022.png" alt="" />
                </div>
                <div class="span__two">
                    <img src="https://i.ibb.co/ggP9s5b/Slice-22-Advice-Commencement-Dom.png" alt="" />
                </div>
                <div class="span__two phone_one">
                    <img src="https://i.ibb.co/sC2jHLf/2018060520180605-Commenecment-5.png" alt="" />
                </div>
                <div class="span__one">
                    <img src="https://i.ibb.co/Sx3FRrM/05242022-latinx-jk-0623.png" alt="" />
                </div>
                <div class="span__one">
                    <img src="https://i.ibb.co/sVH4Qtn/Our-values-0.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Gallery;