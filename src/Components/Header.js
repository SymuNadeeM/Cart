import React from "react";

export default function Header(props) {
  const { countProduct } = props;
  return (
    <header className="header_all">
      <div>
        <a href="" className="anquar">
          Easy Shopping Cart
        </a>
      </div>
      <div className="sinCart">
        <a href="">
          Cart{""}
          {countProduct ? (
            <button className="badge">{countProduct}</button>
          ) : (
            ""
          )}
        </a>
        <a href="">Sing In</a>
      </div>
    </header>
  );
}
