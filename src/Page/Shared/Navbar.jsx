import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Prodiver/AuthProvider';
import { FaCartShopping } from "react-icons/fa6";
import useCart from '../../Hooks/useCart';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [cart] = useCart();
    
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    //


    const navOptions = <>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/menu'>Our Menu</Link> </li>
        <li><Link to='/order/salad'>Order Food</Link> </li>
        <li><Link to='/secret'>Secret</Link> </li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn gap-2">
                    <FaCartShopping />
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button>
            </> : <><li><Link to='/login'>Log In</Link> </li></>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-50  max-w-screen-xl bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;