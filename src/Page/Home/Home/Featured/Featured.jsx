import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../../assets/home/featured.jpg'
import '../Featured/Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle heading="Featured Item" subHeading='Check it out'></SectionTitle>
            <div className='flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20 ,2029</p>
                    <p className='uppercase'>Lorem ipsum dolor sit amet.</p>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis nulla quod earum deleniti ipsa dicta blanditiis ullam sed, doloremque tempora vero nisi! Sed, dolorum. Delectus facilis nesciunt, quidem ratione saepe porro quibusdam. Cumque quas recusandae labore, culpa eveniet quam sint repellat temporibus molestias quo esse nisi sequi veritatis nobis.</p>
                    <button className='btn btn-ontline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;