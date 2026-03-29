import React, { use } from 'react';

const Products = ({productsPromise}) => {
    const products = use(productsPromise);
    console.log(products)
    return (
        <div>
            {
                products.map(product => <div>
                    <h3 className='text-2xl font-bold'>{product.name}</h3>
                </div>)
            }
        </div>
    );
};

export default Products;