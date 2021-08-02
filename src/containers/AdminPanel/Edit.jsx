import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useContext } from 'react';
import { adminContext } from '../../contexts/AdminContext';
import { useState } from 'react';
import { LocalHotelTwoTone } from '@material-ui/icons';
import { useEffect } from 'react';


const Edit = ({setChangeId}) => {

    const {productToEdit, saveEditedProduct} = useContext(adminContext)
    // console.log(productToEdit);
    const[editProduct, setEditProduct] = useState(productToEdit)
    // console.log(editProduct)
    useEffect(() => {
        setEditProduct(productToEdit)
    },[productToEdit])


    const handleInput = (e) => {
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        }
        setEditProduct(obj)
    }

    const handleClick = () => {
        saveEditedProduct(editProduct)
        setChangeId(null)
    }

    return (
        <>
        {
            editProduct ? (
                <TableRow>
                    <TableCell align='right'><button disabled>DEL</button></TableCell>
                    <TableCell align='right'><button onClick={handleClick}>SAVE</button></TableCell>
                    <TableCell component='th' scope='row'><input onChange={handleInput} value={editProduct.title} type="text" name ="title"></input> </TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.description} type="text" name ="description"></input></TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.image} type="text" name ="image"></input></TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.price} type="number" name ="price"></input></TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.author} type="text" name ="author"></input></TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.discount} type="number" name ="discount"></input></TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.phone} type="number" name ="phone"></input></TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.category} type="text" name ="category"></input></TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.countInStock} type="number" name ="countInStock"></input></TableCell>
                    <TableCell align='right'><input onChange={handleInput} value={editProduct.storeAddress} type="text" name ="storeAddress"></input></TableCell>
                </TableRow>
            ): (null)
        }
        
        </>
    );
};

export default Edit;