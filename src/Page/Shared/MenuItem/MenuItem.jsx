import React, { useEffect } from 'react';

const MenuItem = ({ item }) => {
    const { image, recipe, price, name } = item;

    return (
        <div className='flex space-x-2'>
            <div>
                <img src={image} className='w-[100px]' style={{borderRadius:'0 200px 200px 200px'}} alt="" />
            </div>
            <div>
                <h3 className='uppercase'>{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-yellow-600'>$ {price}</p>
            </div>
        </div>
    );
};

export default MenuItem;