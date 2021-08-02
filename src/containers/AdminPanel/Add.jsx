import { TextField } from '@material-ui/core';
import React from 'react';
import{makeStyles} from '@material-ui/core/styles'
import { useState } from 'react';
import { useContext } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px"
    },
    divs: {
        display: "flex",
        flexDirection: "column",
        width: '49%'
    },
    buttonBlock: {
        marginBottom: '50px',
        width: '100%'
    },
    button: {
        width: '100%',
        padding: '10px',
        background: 'lightBlue',
        color: 'white'
    }

})

const Add = () => {

    const classes = useStyles()
    const {createProduct} = useContext(adminContext)

    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        price: '',
        author: '',
        discount: '',
        phone: '',
        category: '',
        image: '',
        countInStock: '',
        storeAddress: ''
    })

    function handleInput (e){
        let obj = {
            ...newProduct,
            [e.target.name]: e.target.value
        }
        setNewProduct(obj)
    }

    function handleClick(){
        createProduct(newProduct)
        setNewProduct({
            title: '',
            description: '',
            price: '',
            author: '',
            discount: '',
            phone: '',
            category: '',
            image: '',
            countInStock: '',
            storeAddress: ''
        })
    }

    return (
        <>
            <div className={classes.main}>
                <div className={classes.divs}>
                    <TextField value={newProduct.title} onChange={handleInput} name="title" id = "standart-basic" label = "Название" />
                    <TextField value={newProduct.description} onChange={handleInput} name="description" id = "standart-basic" label = "Opisanie" />
                    <TextField value={newProduct.price} onChange={handleInput} name="price" id = "standart-basic" label = "Price" />
                    <TextField value={newProduct.author} onChange={handleInput} name="author" id = "standart-basic" label = "Author" />
                    <TextField value={newProduct.discount} onChange={handleInput} name="discount" id = "standart-basic" label = "Skidka v procentah" />
                </div>
                <div className={classes.divs}>
                    <TextField value={newProduct.phone} onChange={handleInput} name="phone" id = "standart-basic" label = "Nomer prodavca" />
                    <TextField value={newProduct.category} onChange={handleInput} name="category" id = "standart-basic" label = "kategoriya (pamyat')" />
                    <TextField value={newProduct.image} onChange={handleInput} name="image" id = "standart-basic" label = "Foto" />
                    <TextField value={newProduct.countInStock} onChange={handleInput} name="countInStock" id = "standart-basic" label = "Kol-vo v nalichii" />
                    <TextField value={newProduct.storeAddress} onChange={handleInput} name="storeAddress" id = "standart-basic" label = "V kakom magazine kupit" />

                </div>
            </div>
            <div className={classes.buttonBlock}>
                <button onClick={handleClick} className={classes.button}>ADD</button>
            </div>
        </>
    );
};

export default Add;