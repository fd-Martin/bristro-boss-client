import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
const Testimonials = () => {
    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div className='my-20'>
            <SectionTitle heading="Testimonials" subHeading='What Our Client Say'></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                   {
                    reviews.map(review=><SwiperSlide key={review._id}>
                        <div className='my-16 mx-24 flex flex-col items-center'>
                        <Rating style={{maxWidth:180}} value={review.rating} readOnly></Rating>
                            <p className='py-8'>{review.details}</p>
                            <h3 className='text-2xl text-orange-500'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                   }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;