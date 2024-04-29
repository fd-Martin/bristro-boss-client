import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategories from '../MenuCategories/MenuCategories';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (

        <div>
            <Helmet>
                <title> Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle heading="Today's Offer" subHeading="Don't Miss"></SectionTitle>
            {/* offered  */}
            <MenuCategories items={offered}></MenuCategories>
            <MenuCategories items={dessert} title="Dessert" coverImg={dessertImg}></MenuCategories>
            <MenuCategories items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategories>
            <MenuCategories items={salad} title="Salad" coverImg={saladImg}></MenuCategories>
            <MenuCategories items={soup} title="Soup" coverImg={soupImg}></MenuCategories>

        </div>
    );
};

export default Menu;