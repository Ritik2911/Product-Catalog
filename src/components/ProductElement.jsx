import React from "react";
import { ProductDescription, ProductEle, ProductPrice, ProductTitle, StyledImg } from "../StyledComponents/ProductElement";

const ProductElement = ({ product }) => {
  const { image, title, description, price } = product;
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);

  return (
    <div>
    <ProductEle>
      <div>
        <StyledImg src={image} alt="thumbnail here" />
      </div>
      <div>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>
          {
            description.length < 50 ? description :  description.slice(0, 50) + '...'
          }
        </ProductDescription>
        <ProductPrice>{formattedPrice}</ProductPrice>
      </div>
    </ProductEle>
    </div>
  );
};

export default ProductElement;
