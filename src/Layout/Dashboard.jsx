import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaWallet, FaCalendarAlt, FaHome } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
    return (

        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#46a1bd]">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">
                        <li><NavLink to='/dashboard/home'><FaHome /> User Home </NavLink></li>
                        <li><NavLink to='/dashboard/history'><FaWallet /> Payment History </NavLink></li>
                        <li><NavLink to='/dashboard/reservations'><FaCalendarAlt /> Reservations </NavLink></li>
                        <li><NavLink to='/dashboard/mycart'><FaShoppingCart /> My Carts </NavLink></li>
                        <div className='divider'></div>
                        <li><NavLink to='/'><FaHome />  Home </NavLink></li>
                        <li><NavLink to='/menu'> Our Menu </NavLink></li>
                        <li><NavLink to='/order/salad'>Order Food </NavLink></li>
                    </ul>

                </div>
            </div>




        </div>

    );
};

export default Dashboard;