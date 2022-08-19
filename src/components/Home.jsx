import React, { useEffect, useState } from 'react';
import '../styles/Home.css'
import TableRow from './TableRow';

const Home = () => {
    const [isLoading, setIsLoading]= useState(true);
    const [users,setUser]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=> res.json())
        .then(data=> setUser(data))
        setIsLoading(false)
    },[])

    if(isLoading){
        return <h1>Loading...</h1>
    }
    
    return (
        <div>
            <h2 className='heading'>Showing All Users</h2>
            <div>
                <table className='table'>
                    <thead >
                        <tr>
                            <th className='t-cell'>Name</th>
                            <th className='t-cell'>Username</th>
                            <th className='t-cell'>Email</th>
                            <th className='t-cell'>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=> <TableRow
                            key={user.id}
                            user={user}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;