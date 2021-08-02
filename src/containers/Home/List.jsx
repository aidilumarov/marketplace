import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import MediaCard from './MediaCard';

const List = () => {

    const {getProducts, products} = useContext(clientContext);

    useEffect(() => {
        getProducts()
    }, []);




    return (
        <div className='list'>
            {
                products ? (
                    products.length ? (
                        products.map(product => (
                            <MediaCard key={product.id} product={product} />
                        ))
                    ) : (
                        <h1>netu tovarov</h1>
                    )
                ) : (
                    <h1>Loading....</h1>
                )
            }

            
        </div>
    );
};

export default List;