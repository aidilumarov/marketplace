import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { adminContext } from '../../contexts/AdminContext';
import Edit from './Edit';

const CustomTable = () => {

    const {getProducts, products, deleteProduct, getProductToEdit} = useContext(adminContext)

    useEffect(() => {
        getProducts()
    }, [])
    // console.log(products);

    const [changeId, setChangeId] = useState(null)

    const handleEditChange = (id) => {
        getProductToEdit(id)
        setChangeId(id)
    }
    
    return (
        <TableContainer component = {Paper}>
            <Table size='small' aria-label='a dense table'>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>#</TableCell>
                        <TableCell>Nazvanie</TableCell>
                        <TableCell align='right'>Foto</TableCell>
                        <TableCell align='right'>Opisanie</TableCell>
                        <TableCell align='right'>Price</TableCell>
                        <TableCell align='right'>Author</TableCell>
                        <TableCell align='right'>Skidka(v %)</TableCell>
                        <TableCell align='right'>Nomer prodavca</TableCell>
                        <TableCell align='right'>Kategoriya (pamyat')</TableCell>
                        <TableCell align='right'>Kol-vo</TableCell>
                        <TableCell align='right'>Lokaciya</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products ? (

                                <>
                                    {
                                        products.length ? (
                                            products.map(product => (
                                                <React.Fragment key={product.id}>
                                                    {
                                                        changeId === product.id ? (
                                                            <Edit setChangeId={setChangeId} />
                                                        ) : (
                                                            <TableRow>
                                                                <TableCell align='right'><button onClick={()=>deleteProduct(product.id)}>DEL</button></TableCell>
                                                                <TableCell align='right'><button onClick={()=>handleEditChange(product.id)}>EDIT</button></TableCell>
                                                                <TableCell component='th' scope='row'>{product.title} </TableCell>
                                                                <TableCell align='right'><img width='100' src={product.image} alt="#"></img></TableCell>
                                                                <TableCell align='right'>{product.description}</TableCell>
                                                                <TableCell align='right'>{product.price}</TableCell>
                                                                <TableCell align='right'>{product.author}</TableCell>
                                                                <TableCell align='right'>{product.discount}</TableCell>
                                                                <TableCell align='right'>{product.phone}</TableCell>
                                                                <TableCell align='right'>{product.category}</TableCell>
                                                                <TableCell align='right'>{product.countInStock}</TableCell>
                                                                <TableCell align='right'>{product.storeAddress}</TableCell>
                                                            </TableRow>
                                                        )
                                                    }
                                                    
                                                </React.Fragment>
                                            ))
                                        ) : (
                                            <h2>tovara net</h2>
                                        )
                                    }
                                </>

                          
                        ) : (
                            <h1>Loading...</h1>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;