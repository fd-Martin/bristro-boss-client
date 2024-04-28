import React from 'react';
import Bannar from '../Bannar/Bannar';
import Category from '../../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;