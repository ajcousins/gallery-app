import React from "react";

export default function BasketTile({ item, qty, frontUrl }) {
  return (
    <div className='basket__tile'>
      <div className='basket__tile__img-wrapper'>
        <img className='basket__tile__img' src={frontUrl} alt={item} />
      </div>
      Item: {item} | Qty: {qty}
    </div>
  );
}
