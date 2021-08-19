import React from "react";
import numberToGBP from "../utils/numberToGBP";

export default function SellPanel({ sellData, handleSell }) {
  const handleEdit = () => {
    handleSell();
  };

  return (
    <>
      <h4 className='collection-tile__sell-panel__price'>
        {numberToGBP(sellData.price)}
      </h4>
      <span className='collection-tile__sell-panel__qty'>
        Qty:&nbsp;
        <h4 className='collection-tile__sell-panel__price'>
          {sellData.quantity}
        </h4>
      </span>
      <button className='collection-tile__sell-panel__btn' onClick={handleEdit}>
        Edit Selling Details
      </button>
      <button
        className='collection-tile__sell-panel__btn'
        style={{ margin: "0 0 0 1em" }}
      >
        Discontinue
      </button>
    </>
  );
}
