import React from 'react';
import useCart from '../../../Hooks/useCart';
import { Helmet } from 'react-helmet-async';

const MyCart = () => {
    const [cart] = useCart();
    const total=cart.reduce((sum,item)=>(item.price + sum),0)
    return (
        <div>
            <Helmet>
                <title> Bistro Boss | My Cart</title>
            </Helmet>
            <div>
                <h2 className="text-3xl">Total Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Price: ${total}</h2>
                <button className="btn btn-warning">Pay</button>

            </div>
        </div>
    );
};

export default MyCart;