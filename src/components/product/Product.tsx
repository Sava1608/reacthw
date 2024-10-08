import React, {FC} from 'react';
import {IProducts} from "../../interfaces/IProducts/IProducts";
import './Product.css'

const Product:FC<IProducts> = ({id, title, description, category, price, discountPercentage, rating, stock, tags, brand, sku, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, minimumOrderQuantity, meta, thumbnail, images}) => {
    return (
        <div className={'Product'}>
            <h3>ID:{id} {title}</h3>
            <h3>Category: {category}</h3>
            {
                images.map((value,index) => <img key={index} src={value} alt='#'/>)
            }
            <p>{description}</p>
            <h1>Price:{price} Rating:{rating}* | {discountPercentage}%</h1>
            <ul>
                <li>State: {stock}</li>
                <li>Brand: {brand}</li>
                <li>Tags: {tags}</li>
                <li>SKU: {sku}</li>
                <li>Weight: {weight}</li>
            </ul>
            <h5>Dimensions:</h5>
            <ul>
                <li>{dimensions.width}</li>
                <li>{dimensions.height}</li>
                <li>{dimensions.depth}</li>
            </ul>
            <h5>Info:</h5>
            <ul>
                <li>{warrantyInformation}</li>
                <li>{shippingInformation}</li>
                <li>{availabilityStatus}</li>
            </ul>
            <h5>Reviews:</h5>
            {
                reviews.map((review) => (
                    <div className="Review">
                        <ul>
                            <li>{review.reviewerName}</li>
                            <li>{review.reviewerEmail}</li>
                            <li>{review.comment}</li>
                            <li>{review.date}</li>
                            <li>{review.rating}</li>
                        </ul>
                    </div>
                ))
            }
            <p>Return Policy: {returnPolicy}</p>
            <p>Quality Order: {minimumOrderQuantity}</p>
            <h5>MetaDate:</h5>
            <ul>
                <li>{meta.createdAt}</li>
                <li>{meta.updatedAt}</li>
                <li>{meta.barcode}</li>
                <img className="QR" src={meta.qrCode} alt='#'/>
            </ul>
            <img src={thumbnail} alt='#'/>
        </div>
    );
};

export default Product;