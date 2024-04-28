import React from 'react';
import Bannar from '../Bannar/Bannar';
import Category from '../../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from './Featured/Featured';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;