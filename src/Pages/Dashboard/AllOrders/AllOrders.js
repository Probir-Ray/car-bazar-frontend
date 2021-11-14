import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/allOrder')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
    
    return (
        <div>
            <h3 className="text-center">Manage All Orders</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="center">Order By</TableCell>
                        <TableCell align="center">Shipping Address</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map(order => (
                        <TableRow
                        key={order._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{order.key}</TableCell>
                        <TableCell align="center">{order.name}</TableCell>
                        <TableCell align="center">{order.address}, {order.city}</TableCell>
                        <TableCell align="center">{order.phone}</TableCell>
                        <TableCell align="center">{!order.status && 'Pending'}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllOrders;