import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBarFront from "./NavBarFront";
import BasketTile from "./BasketTile";

export default function Basket() {
  const basket = useSelector((state) => state.basket);
  return (
    <>
      <NavBarFront title='Artist Gallery & Shop' />
      <div className='basket'>
        {basket.map((item) => (
          <BasketTile
            item={item.item}
            qty={item.qty}
            frontUrl={item.frontUrl}
          />
        ))}
      </div>
    </>
  );
}
