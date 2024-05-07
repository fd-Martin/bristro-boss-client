import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUserShield } from 'react-icons/fa6';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'], queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json();
        }
    });

    const handleDelete = user => {

    }

    const handleMakeAdmit = (id) => {

    }
    
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss || All Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> {user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmit(user._id)} className="btn btn-ghost text-white bg-red-600"> <FaUserShield /></button>}</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost text-white bg-blue-600"><FaTrashAlt /></button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;