import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/manageProducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    // Delete a product
    const handleDeleteProduct = id => {
        const confirmation = window.confirm('Are you sure to delete this product?');
        if(confirmation) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const restOfProduct = products.filter(product => product._id !== id);
                    setProducts(restOfProduct);
                }
            });            
        }
    }
    
    return (
        <div>
            <h3 className="text-center">Manage Products</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="left">Product Description</TableCell>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map(product => (
                        <TableRow
                        key={product._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{product.name}</TableCell>
                        <TableCell align="left">{product.desc.slice(0, 120)}</TableCell>
                        <TableCell align="center"><img style={{width: '50%'}} src={product.img}></img></TableCell>
                        <TableCell align="center">{product.price}</TableCell>
                        <TableCell align="center"><Button variant="contained" onClick={() => handleDeleteProduct(product._id)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;