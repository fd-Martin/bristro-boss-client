import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategories = ({ items, coverImg, title }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={coverImg} title={title}></Cover>}

            <div className='grid md:grid-cols-2 gap-10 my-10 mx-8'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-b-4 mt-4'>Order</button>
            </Link>
        </div>
    );
};

export default MenuCategories;