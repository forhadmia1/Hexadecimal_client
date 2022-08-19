import React from 'react';

const TableRow = ({user}) => {
    return (
        <tr >
            <td className='t-cell'>{user.name}</td>
            <td className='t-cell'>{user.username}</td>
            <td className='t-cell'>{user.email}</td>
            <td className='t-cell'>{user.phone}</td>
        </tr>
    );
};

export default TableRow;