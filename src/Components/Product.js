import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="single_product">
      <img className="small" src={product.img} alt={product.title} />
      <div className="single_title">
        <h5 className="title">{product.title}</h5>
        <p className="title">{product.desc}</p>
        <div className="title">${product.price}</div>

        <div>
          <button onClick={() => onAdd(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
