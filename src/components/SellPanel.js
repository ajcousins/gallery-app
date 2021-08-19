import React from "react";

export default function SellPanel({ handleSell }) {
  return (
    <div className='collection-tile__sell-panel'>
      <input className='collection-tile__sell-panel__input'></input>
      <button className='collection-tile__sell-panel__btn' onClick={handleSell}>
        Cancel
      </button>
    </div>
  );
}
