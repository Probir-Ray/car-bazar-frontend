import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    const email = user.email;
    

    useEffect(()=> {
        const url = `http://localhost:5000/myOrders/${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);


    // Delete a product
    const handleDeleteOrder = id => {
        const confirmation = window.confirm('Are you sure to delete this order?');
        if(confirmation) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Order Deleted successfully');
                    const restOfProduct = orders.filter(product => product._id !== id);
                    setOrders(restOfProduct);
                }
            });            
        }
    }


    return (
        <div>
            <h3 className="text-center my-3 py-3">My Orders</h3>
            { orders.length < 1 ? 
            (
             <div className="text-center">
                 <h1>Mr./ Mrs. {user.displayName}</h1>
                 <h3>No item to showing order, Please order any product</h3>
             </div>
            )
            : 
            (<TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product ID</TableCell>
                            <TableCell align="center">Shipping Address</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map(order => (
                        <TableRow
                            key={order._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">{order.key}</TableCell>
                            <TableCell align="center">{order.address}, {order.city}</TableCell>
                            <TableCell align="center">{order.phone}</TableCell>
                            <TableCell align="center">{order.status === false ? 'Pending' : 'Shipped'}</TableCell>
                            <TableCell align="center"><Button variant="contained" onClick={() => handleDeleteOrder(order._id)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>)}
        </div>
    );
};

export default MyOrders;