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
                products.map(({
                                  id,
                                  title,
                                  description,
                                  category,
                                  price,
                                  discountPercentage,
                                  rating,
                                  stock,
                                  tags,
                                  brand,
                                  sku,
                                  weight,
                                  dimensions,
                                  warrantyInformation,
                                  shippingInformation,
                                  availabilityStatus,
                                  reviews,
                                  returnPolicy,
                                  minimumOrderQuantity,
                                  meta,
                                  thumbnail,
                                  images}:IProducts) => (
                        <Product key={id}
                                 id={id}
                                 title={title}
                                 description={description}
                                 category={category}
                                 price={price}
                                 discountPercentage={discountPercentage}
                                 rating={rating}
                                 stock={stock}
                                 tags={tags}
                                 brand={brand}
                                 sku={sku}
                                 weight={weight}
                                 dimensions={dimensions}
                                 warrantyInformation={warrantyInformation}
                                 shippingInformation={shippingInformation}
                                 availabilityStatus={availabilityStatus}
                                 reviews={reviews}
                                 returnPolicy={returnPolicy}
                                 minimumOrderQuantity={minimumOrderQuantity}
                                 meta={meta}
                                 thumbnail={thumbnail}
                                 images={images}/>
                ))
            }
        </div>
    );
};

export default Products;