import React from 'react';
import useCart from '../../../Hooks/useCart';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => (item.price + sum), 0)
    return (
        <div>
            <Helmet>
                <title> Bistro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px] gap-4'>
                <h2 className="text-3xl">Total Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Price: ${total}</h2>
                <button className="btn btn-warning">Pay</button>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className='text-end'> $ {item.price}</td>
                                <td><button className="btn btn-lg btn-ghost text-white bg-red-600"><FaTrashAlt /></button></td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;