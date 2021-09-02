import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBarFront from "./NavBarFront";
import BasketTile from "./BasketTile";
import numberToGBP from "../utils/numberToGBP";

export default function Basket() {
  const basket = useSelector((state) => state.basket);
  const shipping = 5;
  const [total, setTotal] = useState(0);

  // Update basket total
  useEffect(() => {
    if (basket.length > 0) {
      const subTotal = basket.reduce(
        (prev, cur) => prev + Number(cur.price) * cur.qty,
        0
      );
      setTotal(subTotal + shipping);
    } else {
      setTotal(shipping);
    }
  }, [basket]);

  return (
    <>
      <NavBarFront title='Artist Gallery & Shop' />
      {basket.length > 0 ? (
        <div className='basket'>
          {basket.map((item) => (
            <BasketTile
              item={item.item}
              qty={item.qty}
              frontUrl={item.frontUrl}
              price={item.price}
            />
          ))}
          <div className='basket__tile-footer'>
            <div>UK Shipping</div>
            <div className='basket__tile__unit-price'>
              {numberToGBP(shipping)}
            </div>
          </div>
          <div className='basket__tile-footer'>
            <div>TOTAL</div>
            <div
              className='basket__tile__unit-price'
              style={{ fontWeight: "700" }}
            >
              {numberToGBP(total)}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button class='front-btn basket__tile__checkout'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className='basket'>You have no items in your basket.</div>
      )}
    </>
  );
}
