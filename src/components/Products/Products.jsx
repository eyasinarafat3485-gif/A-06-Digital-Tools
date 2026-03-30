import React, { use } from 'react';

import ProductsCart from '../ProductsCart';

const Products = ({productsPromise, carts, setCarts}) => {
    const products = use(productsPromise);
    // console.log(products)
    

    return (
        <div>
            <div className='w-[90%] mx-auto gap-5 grid md:grid-cols-2 lg:grid-cols-3 '>
            {
                products.map((product) => (
                    <ProductsCart key={product.id} product={product} carts={carts} setCarts={setCarts}></ProductsCart>
                ))
            }
            </div>
        </div>
    );
};

export default Products;