import React, {FC, useState, useEffect} from 'react';
import {IProducts} from "../../interfaces/IProducts/IProducts";
import Product from "../product/Product";

const Products:FC = () => {

    const [products, setProducts] = useState<IProducts[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products);
            });

    }, []);


    return (
        <div>
            {
                products.map((product) => (<Product key={product.id} product={product}/>))
            }
        </div>
    );
};

export default Products;