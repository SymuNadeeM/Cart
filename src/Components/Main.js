import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { productData, onAdd } = props;
  return (
    <main>
      <div className="row">
        <h2 className="text_item">Products</h2>
        <div className="col-lg-10">
          <div className="All_product">
            {productData.map((product) => (
              <Product key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
